# -*- coding: utf-8 -*-
import logging
import shelve
import asyncio
from typing import *

import aiohttp

# 不带这堆头部有时候也能成功请求，但是带上后成功的概率更高
BILIBILI_COMMON_HEADERS = {
    'Origin': 'https://www.bilibili.com',
    'Referer': 'https://www.bilibili.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
}

http_session: Optional[aiohttp.ClientSession] = None 
logger = logging.getLogger(__name__)

def init():
    global http_session
    http_session = aiohttp.ClientSession(
        response_class=CustomClientResponse,
        timeout=aiohttp.ClientTimeout(total=10)
    )
    reload_cookie()



async def shut_down():
    if http_session is not None:
        await http_session.close()


def reload_cookie(): 
    with shelve.open('data/login') as db:
        cookie = db.get('cookie')
        if cookie is not None: 
            logger.info('成功载入了登录态')
            http_session.cookie_jar.update_cookies(cookie)
        else:
            logger.info('当前无登录态')
            http_session.cookie_jar.clear()
            
class CustomClientResponse(aiohttp.ClientResponse):
    # 因为aiohttp的BUG，当底层连接断开时，_wait_released可能会抛出CancelledError，导致上层协程结束。这里改个错误类型
    async def _wait_released(self):
        try:
            return await super()._wait_released()
        except asyncio.CancelledError as e:
            raise aiohttp.ClientConnectionError('Connection released') from e
