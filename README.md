# blivechat

支持扫码登录的 blivechat， 避免身份码（开放平台）部分信息缺失。

本fork添加了简单的回复弹幕显示（@弹幕）(**只熊kuma版**除外，不好合并)

只熊KUMA版的请看 [bear-qrcode-ycc 分支](https://github.com/luyanci/blivechat-reito/tree/bear-qrcode-ycc)

原版的请看 [orig-qrcode-re 分支](https://github.com/luyanci/blivechat-reito/tree/orig-qrcode-re)

## 声明

必须使用小号进行扫码，一个号同一时间只能进入一个直播间。凭据会本地储存，如执意使用大号扫码所造成的一切损失与我无关。

## 下载

[前往下载](https://github.com/luyanci/blivechat-reito/releases/tag/release)

记得复制原作者的发行版中部分资源文件，如 `data/emoticons` 或其他 `frontend` 中需要使用的样式资源文件

## 打包

```shell
git clone --recursive https://github.com/luyanci/blivechat-reito.git -b orig-qrcode-re-dom

cd frontend
npm i
npm run build
cd ..

conda create -n blivechat python=3.9
pip install -r requirements.txt
pyinstaller main.py -n blivechat --add-data "data;data" --add-data "log;log" --add-data "frontend/dist;frontend/dist" --hidden-import aiohttp --noconfirm
```

[原文档](https://github.com/xfgryujk/blivechat/blob/dev/README.md)
