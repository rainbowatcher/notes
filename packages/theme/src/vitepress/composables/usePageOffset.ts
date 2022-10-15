import { useLocalStorage, useWindowScroll } from '@vueuse/core'
import { onMounted, watch } from 'vue'

const usePageOffset = (key: string, _options = {}) => {
  const { y } = useWindowScroll()

  let offset = useLocalStorage(key, y)

  watch(y, () => {
    offset = useLocalStorage(key, y)
  })

  onMounted(() => {
    window.scrollTo({
      top: offset.value,
      behavior: 'smooth',
    })
  })
}

export default usePageOffset
