import { getUuid4Hex } from '@/utils'
import * as constants from '@/components/ChatRenderer/constants'
import * as chat from '.'

const NAMES = [
  'xfgryujk', 'Simon', 'Il Harper', 'Kinori', 'shugen', 'yuyuyzl', '3Shain', '光羊', '黑炎', 'Misty', '孤梦星影',
  'ジョナサン・ジョースター', 'ジョセフ・ジョースター', 'ディオ・ブランドー', '空條承太郎', '博丽灵梦', '雾雨魔理沙', 'Rick Astley',
  '只熊KUMA', 'DoodleBear', '椅子_Official', '星界璃海', '玲玲', '海式policturn', '小川尚未', '梅林Kitsune', '因扎因·内比娅',
  '只熊KUMA', 'DoodleBear', '椅子_Official', '星界璃海', '玲玲', '海式policturn', '小川尚未', '梅林Kitsune', '因扎因·内比娅',
  '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA',
  '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA',
  '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA', '只熊KUMA',
  'luyanci','luyanci','luyanci','luyanci','luyanci','luyanci','luyanci','luyanci','luyanci','luyanci',
  'YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib','YC酱luyancib'

]

const MEDAL_NAME = [
  '被炉', '轮椅人', '祈并者', '未川控', '棺材铺', '勋章名称', '勋章名称', '勋章名称', '白送了', '幻士', '玲喵','不dd雷'
]

const OFFICIAL_EMOJI_NAME = [
  '这是官方表情（看到这个说明你关闭了官方表情自动添加）', '这是官方表情（看到这个说明你关闭了官方表情自动渲染）',
  '点赞', '妙啊', '有点东西', '离谱',
  '很有精神', '泪目', '赢麻了', '多谢款待',
  '啊我死了', '笑死', '鸡汤来啦', '雀食',
  '烦死了', '禁止套娃', '暗中观察', '保熟吗',
  '比心', '？？？', '好耶', '咸鱼翻身',
  'mua', '打扰了', '来了来了', '贴贴',
  '牛牛牛', '颠个勺', '好家伙', '那我走',
  '下次一定', '不上Ban', '就这', '上热榜',
  '中奖喷雾', '我不理解'
]

const SC_CONTENTS = [
  '草', '草', '草', '草', '草', '草', '啊这', '啊这', '啊这', '啊这', '啊这',
  '三点几嘞[喝茶]先嘞，做什么做，[喝茶], 喝茶先啦', '我很有[钱][钱][钱]', '“希望之花”', '【二次元是不会背叛你的】',
  '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】', '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】',
  '草', 'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  '', '', '', '', '', '', '', '', '', ''
]

const CONTENTS = [
  '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]',
  '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]', '狗头[dog]',
  '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]',
  '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]', '比心捏[比心]',
  'yyds', 'yyds', 'yyds', 'yyds', 'yyds', 'yyds', 'yyds',
  '草', '草', '草', '草', '草', '草', '草', '草', '草', '草',
  '测试', '测试', '测试', '测试', '测试', '测试',
  '好耶', '好耶', '好耶', '好耶', '好耶', '好耶',
  '勇！', '勇！', '勇！', '勇！', '勇！', '勇！',
  '明白', '明白', '明白', '明白', '明白', '明白', '明白', '明白',
  '中嘞', '中嘞', '中嘞', '中嘞', '中嘞', '中嘞', '中嘞', '中嘞',
  '不中', '不中', '不中', '不中', '不中', '不中', '不中', '不中',
  'hso', 'hso', 'hso', 'hso', 'hso',
  '233', '233', '233', '233', '233',
  '666', '666', '666', '666', '666',
  'emo', 'emo', 'emo', 'emo', 'emo',
  '草草草', '草草草', '草草草', '草草草', '草草草', '草草草',
  '草草草', '草草草', '草草草', '草草草', '草草草', '草草草',
  '钱钱钱', '钱钱钱', '钱钱钱', '钱钱钱', '钱钱钱', '钱钱钱',
  '[测试]', '[测试]', '[测试]', '[测试]', '[测试]', '[测试]',
  '“希望之花”', '“希望之花”', '“希望之花”', '“希望之花”',
  '希望人没事', '希望人没事', '希望人没事', '希望人没事', '希望人没事', '希望人没事',
  '地铁老人手机', '地铁老人手机', '地铁老人手机', '地铁老人手机', '地铁老人手机',
  '哼哼哼啊啊啊啊啊啊啊', '哼哼哼啊啊啊啊啊啊啊', '哼哼哼啊啊啊啊啊啊啊', '哼哼哼啊啊啊啊啊啊啊', '哼哼哼啊啊啊啊啊啊啊',
  '岂可修【铁咩】', '岂可修【铁咩】', '岂可修【铁咩】', '岂可修【铁咩】', '岂可修【铁咩】', '岂可修【铁咩】',
  '三点几嘞饮茶先嘞', '三点几嘞饮茶先嘞', '三点几嘞饮茶先嘞',
  '做猪最重要的是开心', '做猪最重要的是开心', '做猪最重要的是开心', '做猪最重要的是开心', '做猪最重要的是开心',
  '我很有[钱][钱][钱]', '我很有[钱][钱][钱]', '我很有[钱][钱][钱]',
  '非常生草了，笑死我，绷不住', '非常生草了，笑死我，绷不住', '非常生草了，笑死我，绷不住', '非常生草了，笑死我，绷不住',
  '我要对你使用【炎拳】', '我要对你使用【炎拳】', '我要对你使用【炎拳】', '岂可修【铁咩】我要对你使用【炎拳】', '岂可修【铁咩】我要对你使用【炎拳】',
  '岂可修【铁咩】我要对你使用【炎拳】', '岂可修【铁咩】我要对你使用【炎拳】', '岂可修【铁咩】我要对你使用【炎拳】',
  '【二次元是不会背叛你的】', '【二次元是不会背叛你的】', '【二次元是不会背叛你的】', '【二次元是不会背叛你的】',
  '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】', '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】',

  '【这是1条翻译', '【这是2条翻译', '【这是3条翻译', '【这是4条翻译', '【这是5条翻译',
  '【这句话没听懂', '【这句话没听懂', '【这句话没听懂', '【迷迭迷迭帕里桑，tekoki', '【迷迭迷迭帕里桑，tekoki',
  '【你看你看，帕里桑，手冲', '【帕里快看，我在手冲诶', '【你懂个锤子', '【迷迭迷迭帕里桑，tekoki', '【看啊看啊 帕里桑 这是手冲哦',

  '草', 'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康',
  'The quick brown fox jumps over the lazy dog', "I can eat glass, it doesn't hurt me",
  '我不做人了，JOJO', '無駄無駄無駄無駄無駄無駄無駄無駄', '欧啦欧啦欧啦欧啦欧啦欧啦欧啦欧啦', '逃げるんだよォ！',
  '嚯，朝我走过来了吗，没有选择逃跑而是主动接近我么', '不要停下来啊', '已经没有什么好怕的了',
  'I am the bone of my sword. Steel is my body, and fire is my blood.', '言いたいことがあるんだよ！',
  '我忘不掉夏小姐了。如果不是知道了夏小姐，说不定我已经对这个世界没有留恋了', '迷えば、敗れる',
  '我忘不掉夏小姐了。如果不是知道了夏小姐，说不定我已经对这个世界没有留恋了', '迷えば、敗れる',
  'Farewell, ashen one. May the flame guide thee', '竜神の剣を喰らえ！', '竜が我が敌を喰らう！',
  '有一说一，这件事大家懂的都懂，不懂的，说了你也不明白，不如不说', '让我看看', '我柜子动了，我不玩了',
  '草',
  '让我看看',
  '不要停下来啊',
  '我不做人了，JOJO',
  '已经没有什么好怕的了',
  '我柜子动了，我不玩了',
  '老板大气，老板身体健康',
  '我醉提酒游寒山，爽滑慢舔',
  '無駄無駄無駄無駄無駄無駄無駄無駄',
  '欧啦欧啦欧啦欧啦欧啦欧啦欧啦欧啦',
  '所有没好全部康复呀，我的癌也全部康复呀',
  '嚯，朝我走过来了吗，没有选择逃跑而是主动接近我么',
  '有一说一，这件事大家懂的都懂，不懂的，说了你也不明白，不如不说',
  '如来来了吗？如来嘛~他真来了吗？如~来~到底来没来？如来~如来他真来了吗？如来~你看看，来没来？如~来~',
  '迷えば、敗れる',
  '逃げるんだよォ！',
  '竜神の剣を喰らえ！',
  '竜が我が敌を喰らう！',
  '言いたいことがあるんだよ！',
  '知らず知らず隠してた 本当の声を響かせてよほら',
  'kksk',
  '8888888888',
  'Never gonna give you up',
  'Never gonna let you down',
  '888888888888888888888888888888',
  'I am the storm that is approaching',
  "I can eat glass, it doesn't hurt me",
  'The quick brown fox jumps over the lazy dog',
  'Farewell, ashen one. May the flame guide thee',
  'I am the bone of my sword. Steel is my body, and fire is my blood.',
]

// NOTE: 测试用 Emoticon
const EMOTICONS = [
  '/static/img/emoticons/233.png',
  '/static/img/emoticons/miaoa.png',
  '/static/img/emoticons/lipu.png'
]

const EMOT_INFO_LIST = [
  {
    "[dog]": {
      "emoticon_id": 208,
      "emoji": "[dog]",
      "descript": "[dog]",
      "url": "/static/img/emoticons/dog.png",
      "width": 20,
      "height": 20,
      "emoticon_unique": "emoji_208"
    },
    "[比心]": {
      "emoticon_id": 217,
      "emoji": "[比心]",
      "descript": "[比心]",
      "url": "/static/img/emoticons/bixin.png",
      "width": 20,
      "height": 20,
      "emoticon_unique": "emoji_217"
    }
  }
]

const EMOT_DETAIL_LIST = [
  {
    "bulge_display": 0,
    "emoticon_unique": "official_147",
    "height": 60,
    "in_player_area": 1,
    "is_dynamic": 0,
    "url": "http://i0.hdslb.com/bfs/live/bbd9045570d0c022a984c637e406cb0e1f208aa9.png",
    "width": 150
  },
  {
    "bulge_display": 1,
    "emoticon_unique": "room_21782115_10262",
    "height": 162,
    "in_player_area": 1,
    "is_dynamic": 1,
    "url": "http://i0.hdslb.com/bfs/live/f6126c31b95501778c120c20aa11e7cbadd3cd35.png",
    "width": 162
  },
  {
    "bulge_display": 1,
    "emoticon_unique": "upower_[Cat_escort]",
    "height": 20,
    "in_player_area": 1,
    "is_dynamic": 0,
    "url": "http://i0.hdslb.com/bfs/emote/81784f53f5ca7004a90d316c81889d8161dc05a6.png",
    "width": 20
  },
]

const AUTHOR_TYPES = [
  { weight: 2, value: constants.AUTHOR_TYPE_NORMAL },
  { weight: 3, value: constants.AUTHOR_TYPE_MEMBER },
  { weight: 1, value: constants.AUTHOR_TYPE_ADMIN },
  { weight: 1, value: constants.AUTHOR_TYPE_OWNER }
]

function randGuardInfo() {
  let authorType = randomChoose(AUTHOR_TYPES)
  let privilegeType
  if (authorType === constants.AUTHOR_TYPE_MEMBER) {
    privilegeType = randInt(1, 3)
  } else if (authorType === constants.AUTHOR_TYPE_ADMIN) {
    privilegeType = randInt(0, 3)
  } else {
    privilegeType = 0
  }
  return { authorType, privilegeType }
}

const GIFT_INFO_LIST = [
  { giftName: '辣条', price: 0, totalCoin: 100, coinType: 'silver', paid: false, num: 10 },
  { giftName: '小心心', price: 0, totalCoin: 0, coinType: 'silver', paid: false, num: 24 },
  { giftName: '小心心', price: 0, totalCoin: 0, coinType: 'silver', paid: false, num: 1 },
  { giftName: 'B坷垃', price: 0, totalCoin: 9900, coinType: 'silver', paid: false, num: 1 },
  { giftName: '吃瓜', price: 0.1, totalCoin: 100, coinType: 'gold', paid: true, num: 1 },
  { giftName: '吃瓜', price: 0.1, totalCoin: 200, coinType: 'gold', paid: true, num: 2 },
  { giftName: '吃瓜', price: 0.1, totalCoin: 500, coinType: 'gold', paid: true, num: 5 },
  { giftName: '比心', price: 0.5, totalCoin: 500, coinType: 'gold', paid: true, num: 1 },
  { giftName: '比心', price: 0.5, totalCoin: 1000, coinType: 'gold', paid: true, num: 2 },
  { giftName: '冰阔落', price: 1, totalCoin: 1000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '冰阔落', price: 1, totalCoin: 3000, coinType: 'gold', paid: true, num: 3 },
  { giftName: '冰阔落', price: 1, totalCoin: 5000, coinType: 'gold', paid: true, num: 5 },
  { giftName: '给大佬递茶', price: 2, totalCoin: 10000, coinType: 'gold', paid: true, num: 5 },
  { giftName: '给大佬递茶', price: 2, totalCoin: 20000, coinType: 'gold', paid: true, num: 10 },
  { giftName: '打榜', price: 2, totalCoin: 2000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '打榜', price: 2, totalCoin: 6000, coinType: 'gold', paid: true, num: 3 },
  { giftName: '打榜', price: 2, totalCoin: 26000, coinType: 'gold', paid: true, num: 13 },
  { giftName: '喵娘', price: 5.2, totalCoin: 5200, coinType: 'gold', paid: true, num: 1 },
  { giftName: '喵娘', price: 5.2, totalCoin: 52000, coinType: 'gold', paid: true, num: 10 },
  { giftName: 'B坷垃', price: 9.9, totalCoin: 9900, coinType: 'gold', paid: true, num: 1 },
  { giftName: '礼花', price: 28, totalCoin: 28000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '礼花', price: 28, totalCoin: 280000, coinType: 'gold', paid: true, num: 10 },
  { giftName: '花式夸夸', price: 39, totalCoin: 39000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '花式夸夸', price: 39, totalCoin: 390000, coinType: 'gold', paid: true, num: 10 },
  { giftName: '天空之翼', price: 100, totalCoin: 100000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '摩天大楼', price: 450, totalCoin: 450000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '小电视飞船', price: 1245, totalCoin: 1245000, coinType: 'gold', paid: true, num: 1 },
  { giftName: '小电视飞船', price: 1245, totalCoin: 12450000, coinType: 'gold', paid: true, num: 10 }

]

const SC_PRICES = [
  30, 50, 100, 200, 500, 1000, 2000
]

const GUARD_UNIT = ['月', '年']

const MESSAGE_GENERATORS = [
  // 进场
  {
    weight: 10,
    value() {
      return {
        type: constants.MESSAGE_TYPE_INTERACT,
        message: {
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          msgType: randInt(1, 5),
          authorName: randomChoose(NAMES),
          privilegeType: randInt(0, 3),
          medalName: randomChoose(MEDAL_NAME),
          medalLevel: randInt(1, 40),
          isFanGroup: Boolean(Math.round(Math.random())),
          id: getUuid4Hex(),
        }
      }
    }
  },
  // 文字
  {
    weight: 10,
    value() {
      return {
        type: constants.MESSAGE_TYPE_TEXT,
        message: {
          ...randGuardInfo(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          content: randomChoose(CONTENTS),
          isGiftDanmaku: randInt(1, 10) <= 1,
          authorLevel: randInt(0, 60),
          isNewbie: randInt(1, 10) <= 1,
          isMobileVerified: randInt(1, 10) <= 9,
          medalName: randomChoose(MEDAL_NAME),
          medalLevel: randInt(1, 40),
          isFanGroup: Boolean(Math.round(Math.random())),
          id: getUuid4Hex(),
          translation: '',
          emoticon: null,
          emots: randomChoose(EMOT_INFO_LIST),
        }
      }
    }
  },
  // 表情
  {
    weight: 5,
    value() {
      return {
        type: constants.MESSAGE_TYPE_TEXT,
        message: {
          ...randGuardInfo(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          content: randomChoose(OFFICIAL_EMOJI_NAME),
          isGiftDanmaku: false,
          authorLevel: randInt(0, 60),
          isNewbie: randInt(1, 10) <= 1,
          isMobileVerified: randInt(1, 10) <= 9,
          medalLevel: randInt(0, 40),
          id: getUuid4Hex(),
          translation: '',
          emoticon: randomChoose(EMOTICONS),
          emoticonDetail: randomChoose(EMOT_DETAIL_LIST),
        }
      }
    }
  },
  // 礼物
  {
    weight: 3,
    value() {
      return {
        type: constants.MESSAGE_TYPE_GIFT,
        message: {
          ...randomChoose(GIFT_INFO_LIST),
          id: getUuid4Hex(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          num: 1
        }
      }
    }
  },
  // SC
  {
    weight: 1,
    value() {
      return {
        type: constants.MESSAGE_TYPE_SUPER_CHAT,
        message: {
          id: getUuid4Hex(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          price: randomChoose(SC_PRICES),
          content: randomChoose(SC_CONTENTS),
          translation: ''
        }
      }
    }
  },
  // 新舰长
  {
    weight: 1,
    value() {
      return {
        type: constants.MESSAGE_TYPE_MEMBER,
        message: {
          id: getUuid4Hex(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          privilegeType: randInt(1, 3),
          guardNum: randInt(1, 100),
          guardUnit: randomChoose(GUARD_UNIT)
        }
      }
    }
  }
]

function randomChoose(nodes) {
  if (nodes.length === 0) {
    return null
  }
  for (let node of nodes) {
    if (node.weight === undefined || node.value === undefined) {
      return nodes[randInt(0, nodes.length - 1)]
    }
  }

  let totalWeight = 0
  for (let node of nodes) {
    totalWeight += node.weight
  }
  let remainWeight = randInt(1, totalWeight)
  for (let node of nodes) {
    remainWeight -= node.weight
    if (remainWeight > 0) {
      continue
    }
    if (node.value instanceof Array) {
      return randomChoose(node.value)
    }
    return node.value
  }
  return null
}

function randInt(min, max) {
  return Math.floor(min + ((max - min + 1) * Math.random()))
}

export default class ChatClientTest {
  constructor(minSleepTime, maxSleepTime) {
    this.minSleepTime = minSleepTime
    this.maxSleepTime = minSleepTime <= maxSleepTime ? maxSleepTime : minSleepTime
    this.onAddText = null
    this.onAddGift = null
    this.onAddMember = null
    this.onAddSuperChat = null
    this.onDelSuperChat = null
    this.onUpdateTranslation = null
    this.onInteractWord = null

    this.onFatalError = null

    this.timerId = null
  }

  start() {
    this.refreshTimer()
  }

  stop() {
    if (this.timerId) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
  }

  refreshTimer() {
    // 模仿B站的消息间隔模式
    let sleepTime
    if (randInt(0, 4) == 0) {
      sleepTime = randInt(1000, 2000)
    } else {
      sleepTime = randInt(0, 400)
    }
    if (this.timerId) {
      window.clearTimeout(this.timerId)
    }
    this.timerId = window.setTimeout(this.onTimeout.bind(this), sleepTime)
  }

  onTimeout() {
    this.refreshTimer()

    let { type, message } = randomChoose(MESSAGE_GENERATORS)()
    switch (type) {
    case constants.MESSAGE_TYPE_INTERACT:
      this.onInteractWord(message)
      break
    case constants.MESSAGE_TYPE_TEXT:
      this.onAddText(message)
      break
    case constants.MESSAGE_TYPE_GIFT:
      this.onAddGift(message)
      break
    case constants.MESSAGE_TYPE_MEMBER:
      this.onAddMember(message)
      break
    case constants.MESSAGE_TYPE_SUPER_CHAT:
      this.onAddSuperChat(message)
      break
    }
  }
}
