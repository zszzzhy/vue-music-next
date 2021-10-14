import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'

import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

export default function useSlider (wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    // DOM 元素将在初始渲染后分配给 ref
    slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })

    slider.value.on('slideWillChange', page => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slider.value.destroy()
  })

  return {
    slider,
    currentPageIndex
  }
}
