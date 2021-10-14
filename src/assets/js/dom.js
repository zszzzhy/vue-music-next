// 添加类名
export function addClass (el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}
// 移除类名
export function removeClass (el, className) {
  el.classList.remove(className)
}
