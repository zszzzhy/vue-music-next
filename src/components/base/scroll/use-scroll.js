import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'

import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

export default function useScroll (wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
