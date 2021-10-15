<template>
  <scroll class="index-list">
    <ul>
      <li v-for="group in data" :key="group.title" class="group">
        <h2 class="title">{{ group.title }}</h2>
        <ul>
          <li v-for="item in group.list" :key="item.id" class="item">
            <img v-lazy="item.pic" class="avatar" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from '@/components/base/scroll/scroll'

export default {
  name: 'index-list',
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  ul {
    padding: 0;
    .group {
      list-style: none;
      padding-bottom: 30px;
      .title {
        height: 30px;
        line-height: 30px;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
        padding-left: 20px;
        margin: 0;
      }
      ul {
        padding: 0;
        .item {
          display: flex;
          align-items: center;
          padding: 20px 0 0 30px;
          list-style: none;
          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .name {
            margin-left: 20px;
            color: $color-text-l;
            font-size: $font-size-medium;
          }
        }
      }
    }
  }
}
</style>
