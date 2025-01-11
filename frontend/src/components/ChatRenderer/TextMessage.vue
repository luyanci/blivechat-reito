<template>
  <yt-live-chat-text-message-renderer :style="{
    '--repeated-text-color': randomColor,
  }" :is-fan-group="isFanGroup" :medal-level="medalLevel" :author-type="authorTypeText" :privilegeType="privilegeType"
    :is-admin="authorType === 2" :is-owner="authorType === 3" :is-deleted="isDelete">
    <div id="card" class="style-scope yt-live-chat-text-message-renderer">
      <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-text-message-renderer"
        :imgUrl="avatarUrl"></img-shadow>
      <div id="content" class="style-scope yt-live-chat-text-message-renderer">
        <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
          <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">{{ timeText }}</span>
          <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip" :type="authorTypeText">{{
            authorName
          }}<!-- 这里是已验证勋章 -->
            <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
          </span>
          <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
            <author-badge class="style-scope yt-live-chat-author-chip" :isAdmin="authorType === 2"
              :privilegeType="privilegeType"></author-badge>
          </span>
        </yt-live-chat-author-chip>
        <div id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
          <template v-for="(content, index) in richContent">
            <span id="message" class="style-scope yt-live-chat-text-message-renderer" :key="index"
              v-if="content.type === CONTENT_TYPE_TEXT">{{ content.text }}</span>
            <!-- 如果CSS设置的尺寸比属性设置的尺寸还大，在图片加载完后布局会变化，可能导致滚动卡住，没什么好的解决方法 -->
            <img :key="index" v-else-if="content.type === CONTENT_TYPE_IMAGE"
              class="emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"
              :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`emoji-${content.text}`"
              :width="content.width" :height="content.height"
              :class="{ 'blc-large-emoji': content.height >= 100 }"
            >
            <span :key="index" v-else-if="content.type === CONTENT_TYPE_AT">@{{ content.uname }} </span>
          </template>
          <el-badge :value="repeated" :max="99" v-if="repeated > 1"
            class="style-scope yt-live-chat-text-message-renderer"
            :style="{ '--repeated-mark-color': repeatedMarkColor }"></el-badge>
        </div>
      </div>
    </div>
  </yt-live-chat-text-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow'
import AuthorBadge from './AuthorBadge'
import * as constants from './constants'
import * as utils from '@/utils'

// HSL
const RANDOM_TEXT_COLOR_START = [0, 100.0, 55.0]
const RANDOM_TEXT_COLOR_END = [360, 60.0, 75.0]

const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

export default {
  name: 'TextMessage',
  components: {
    ImgShadow,
    AuthorBadge
  },
  props: {
    avatarUrl: String,
    time: Date,
    authorName: String,
    authorType: Number,
    richContent: Array,
    medalLevel: Number,
    privilegeType: Number,
    repeated: Number
  },
  data() {
    return {
      CONTENT_TYPE_TEXT: constants.CONTENT_TYPE_TEXT,
      CONTENT_TYPE_IMAGE: constants.CONTENT_TYPE_IMAGE,
      CONTENT_TYPE_AT: constants.CONTENT_TYPE_AT,
    }
  },
  computed: {
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    authorTypeText() {
      return this.privilegeType > 0 ? 'member' : constants.AUTHOR_TYPE_TO_TEXT[this.authorType]
    },
    randomColor() {
      let color = [0, 0, 0]
      let t = Math.random()
      for (let i = 0; i < 3; i++) {
        color[i] = RANDOM_TEXT_COLOR_START[i] + ((RANDOM_TEXT_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t)
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    },

    repeatedMarkColor() {
      let color
      if (this.repeated <= 2) {
        color = REPEATED_MARK_COLOR_START
      } else if (this.repeated >= 10) {
        color = REPEATED_MARK_COLOR_END
      } else {
        color = [0, 0, 0]
        let t = (this.repeated - 2) / (10 - 2)
        for (let i = 0; i < 3; i++) {
          color[i] = REPEATED_MARK_COLOR_START[i] + ((REPEATED_MARK_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t)
        }
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    }
  }
}
</script>

<style>
yt-live-chat-text-message-renderer>#content .el-badge {
  margin-left: 10px;
}

yt-live-chat-text-message-renderer>#content .el-badge .el-badge__content {
  font-size: 14px !important;
  line-height: 18px !important;
  text-shadow: none !important;
  font-family: sans-serif !important;
  color: #FFF !important;
  background-color: var(--repeated-mark-color) !important;
  border: none;
}
</style>

<style src="@/assets/css/youtube/yt-live-chat-text-message-renderer.css"></style>
