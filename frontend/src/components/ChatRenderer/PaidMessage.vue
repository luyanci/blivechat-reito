<template>
  <yt-live-chat-paid-message-renderer class="style-scope yt-live-chat-item-list-renderer" allow-animations
    :show-only-header="!content" :style="{
      '--yt-live-chat-paid-message-secondary-color': priceRange.colors.headerBg,
      '--yt-live-chat-paid-message-primary-color': priceRange.colors.contentBg,
      '--yt-live-chat-paid-message-divider-color': priceRange.colors.dividerColor,
      '--yt-live-chat-paid-message-header-color': priceRange.colors.header,
      '--yt-live-chat-paid-message-author-name-color': priceRange.colors.authorName,
      '--yt-live-chat-paid-message-timestamp-color': priceRange.colors.time,
      '--yt-live-chat-paid-message-color': priceRange.colors.content
    }"
    :price-level="priceConfig.priceLevel"
  >
    <div id="card" class="style-scope yt-live-chat-paid-message-renderer">
      <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
        <img-shadow id="author-photo" height="40" width="40" class="style-scope yt-live-chat-paid-message-renderer"
          :imgUrl="avatarUrl"
        ></img-shadow>
        <div id="header-content" class="style-scope yt-live-chat-paid-message-renderer">
          <div id="header-content-primary-column" class="style-scope yt-live-chat-paid-message-renderer">
            <div id="author-name" class="style-scope yt-live-chat-paid-message-renderer">{{ authorName }}</div>
            <div id="purchase-amount" class="style-scope yt-live-chat-paid-message-renderer">{{ showPriceText }}</div>
          </div>
          <span id="timestamp" class="style-scope yt-live-chat-paid-message-renderer">{{ timeText }}</span>
        </div>
      </div>
      <div id="content" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="message" dir="auto" class="style-scope yt-live-chat-paid-message-renderer">{{ content }}</div>
      </div>
    </div>
  </yt-live-chat-paid-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow'
import * as constants from './constants'
import * as utils from '@/utils'

export default {
  name: 'PaidMessage',
  components: {
    ImgShadow
  },
  props: {
    avatarUrl: String,
    authorName: String,
    price: Number, // 价格，人民币
    priceText: String,
    time: Date,
    content: String
  },
  computed: {
    priceConfig() {
      return constants.getPriceConfig(this.price)
    },
    color() {
      return this.priceConfig.colors
    },
    showPriceText() {
      return this.priceText || `CN¥${utils.formatCurrency(this.price)}`
    },
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    }
  }
}
</script>

<style src="@/assets/css/youtube/yt-live-chat-paid-message-renderer.css"></style>
