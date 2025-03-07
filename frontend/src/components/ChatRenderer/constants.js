import * as i18n from '@/i18n'

export const AUTHOR_TYPE_NORMAL = 0
export const AUTHOR_TYPE_MEMBER = 1
export const AUTHOR_TYPE_ADMIN = 2
export const AUTHOR_TYPE_OWNER = 3

export const AUTHOR_TYPE_TO_TEXT = [
  '',
  'member', // 舰队
  'moderator', // 房管
  'owner' // 主播
]

const GUARD_LEVEL_TO_TEXT_KEY = [
  '',
  'chat.guardLevel1',
  'chat.guardLevel2',
  'chat.guardLevel3'
]

export function getShowGuardLevelText(guardLevel) {
  let key = GUARD_LEVEL_TO_TEXT_KEY[guardLevel] || ''
  if (key === '') {
    return ''
  }
  return i18n.i18n.t(key)
}

export const MESSAGE_TYPE_TEXT = 0
export const MESSAGE_TYPE_GIFT = 1
export const MESSAGE_TYPE_MEMBER = 2
export const MESSAGE_TYPE_SUPER_CHAT = 3
export const MESSAGE_TYPE_DEL = 4
export const MESSAGE_TYPE_UPDATE = 5

export const CONTENT_TYPE_TEXT = 0
export const CONTENT_TYPE_IMAGE = 1

// 美元 -> 人民币 汇率
const EXCHANGE_RATE = 7
const PRICE_CONFIGS = [
  // 0 淡蓝
  {
    price: 0,
    colors: {
      contentBg: 'rgba(153, 236, 255, 1)',
      headerBg: 'rgba(153, 236, 255, 1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.701961)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)'
    },
    pinTime: 0,
    priceLevel: 0,
  },
  // ¥0.01 蓝
  {
    price: 0.01,
    colors: {
      contentBg: 'rgba(30,136,229,1)',
      headerBg: 'rgba(21,101,192,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 0,
    priceLevel: 1,
  },
  // $2 浅蓝
  {
    price: 2 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(0,229,255,1)',
      headerBg: 'rgba(0,184,212,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.701961)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)'
    },
    pinTime: 0,
    priceLevel: 2,
  },
  // $5 绿
  {
    price: 5 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(29,233,182,1)',
      headerBg: 'rgba(0,191,165,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)'
    },
    pinTime: 2,
    priceLevel: 3,
  },
  // $10 黄
  {
    price: 10 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(255,202,40,1)',
      headerBg: 'rgba(255,179,0,1)',
      header: 'rgba(0,0,0,0.87451)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,0.87451)'
    },
    pinTime: 5,
    priceLevel: 4,
  },
  // $20 橙
  {
    price: 20 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(245,124,0,1)',
      headerBg: 'rgba(230,81,0,1)',
      header: 'rgba(255,255,255,0.87451)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,0.87451)'
    },
    pinTime: 10,
    priceLevel: 5,
  },
  // $50 品红
  {
    price: 50 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(233,30,99,1)',
      headerBg: 'rgba(194,24,91,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 30,
    priceLevel: 6,
  },
  // $100 红
  {
    price: 100 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(230,33,23,1)',
      headerBg: 'rgba(208,0,0,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 60,
    priceLevel: 7,
  },
]

const MEDAL_CONFIGS = [
  {
    level: 1,
    colors: {
      bgColor: `#5c968e`,
      borderColor: `#5c968e`,
      textColor: `#5c968e`
    }
  },
  {
    level: 5,
    colors: {
      bgColor: `#5d7b9e`,
      borderColor: `#5d7b9e`,
      textColor: `#5d7b9e`
    }
  },
  {
    level: 9,
    colors: {
      bgColor: `#8d7ca6`,
      borderColor: `#8d7ca6`,
      textColor: `#8d7ca6`
    }
  },
  {
    level: 13,
    colors: {
      bgColor: `#be6686`,
      borderColor: `#be6686`,
      textColor: `#be6686`
    }
  },
  {
    level: 17,
    colors: {
      bgColor: `#c79d24`,
      borderColor: `#c79d24`,
      textColor: `#c79d24`
    }
  },
  {
    level: 21,
    colors: {
      bgColor: `linear-gradient(to right, #1e5950, #4e988d)`,
      borderColor: `#1e5950`,
      textColor: `#111111`
    }
  },
  {
    level: 25,
    colors: {
      bgColor: `linear-gradient(to right, #10205b, #6382e9)`,
      borderColor: `#10205b`,
      textColor: `#111111`
    }
  },
  {
    level: 29,
    colors: {
      bgColor: `linear-gradient(to right, #361b69, #7668c3)`,
      borderColor: `#361b69`,
      textColor: `#7668c3`
    }
  },
  {
    level: 33,
    colors: {
      bgColor: `linear-gradient(to right, #881537, #c15b85)`,
      borderColor: `#881537`,
      textColor: `#c15b85`
    }
  },
  {
    level: 37,
    colors: {
      bgColor: `linear-gradient(to right, #ff6e1a, #fdb870)`,
      borderColor: `#ff6e1a`,
      textColor: `#fdb870`
    }
  }
]

export function getMedalConfig(level) {
  let i = 0
  for (; i < MEDAL_CONFIGS.length - 1; i++) {
    let nextConfig = MEDAL_CONFIGS[i + 1]
    if (level < nextConfig.level) {
      return MEDAL_CONFIGS[i]
    }
  }
  return MEDAL_CONFIGS[i]
}

export function getPriceConfig(price) {
  let i = 0
  // 根据先验知识，从小找到大通常更快结束
  for (; i < PRICE_CONFIGS.length - 1; i++) {
    let nextConfig = PRICE_CONFIGS[i + 1]
    if (price < nextConfig.price) {
      return PRICE_CONFIGS[i]
    }
  }
  return PRICE_CONFIGS[i]
}

export function getShowContent(message) {
  if (message.translation) {
    return `${message.content}（${message.translation}）`
  }
  return message.content
}

export function getShowRichContent(message) {
  let richContent = [...message.richContent]
  if (message.translation) {
    richContent.push({
      type: CONTENT_TYPE_TEXT,
      text: `（${message.translation}）`
    })
  }
  return richContent
}

export function getGiftShowContent(message, showGiftName) {
  if (!showGiftName) {
    return ''
  }
  return i18n.i18n.t('chat.sendGift', { giftName: message.giftName, num: message.num })
}

export function getGiftShowNameAndNum(message) {
  return `${message.giftName}x${message.num}`
}

export function getShowAuthorName(message) {
  if (message.authorNamePronunciation && message.authorNamePronunciation !== message.authorName) {
    return `${message.authorName}(${message.authorNamePronunciation})`
  }
  return message.authorName
}
