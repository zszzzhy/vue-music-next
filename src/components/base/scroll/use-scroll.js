import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'

import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

export default function useScroll (wrapperRef, options, emit) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })

    if (options.proboType > 0) {
      scroll.value.on('scroll', pos => {
        emit('scroll', pos)
      })
    }
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
