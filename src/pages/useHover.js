import { useState, useEffect, useRef } from 'react'

// кастомный хук
export function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  // задания значения хука: true - если мышка наведена на элемент, false - если нет
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(() => {
    // current хранит ссылку на привязанный через атрибут ref объект
    const node = ref.current
    // если он существует
    if (node) {
        // добавляем обработку события mouseover. когда оно срабатывает, запускается ф-ия handleMouseOver
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
        // очищаем обработчики события
    //   node.removeEventListener('mouseover', handleMouseOver)
    //   node.removeEventListener('mouseout', handleMouseOut)
    }
  }, [ref.current])

  // возвращаем (передаем) ссылку на объект и значение hover (true или false)
  return [ref, value]
}
