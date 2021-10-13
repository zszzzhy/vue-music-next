<template>
  <div class="recommend">
    榜单页面
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend'

export default {
  name: 'recommend',
  setup () {
    const getList = async () => {
      const data = await getRecommend()
      console.log(data)
    }

    getList()

    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
