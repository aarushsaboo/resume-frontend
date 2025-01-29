// hooks/useDynamicWidth.js
import { useState, useRef, useEffect } from "react"

export const useDynamicWidth = ({ placeholder }) => {
  const [value, setValue] = useState("")
  const [inputWidth, setInputWidth] = useState("0")
  const hiddenText = useRef(null)

  useEffect(() => {
    // Set initial width based on placeholder
    if (hiddenText.current) {
      const width = getTextWidth(placeholder)
      setInputWidth(`${width}px`)
    }
  }, [placeholder])

  const getTextWidth = (text) => {
    if (hiddenText.current) {
      hiddenText.current.textContent = text || placeholder
      return hiddenText.current.offsetWidth
    }
    return 0
  }

  const handleInput = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    const width = getTextWidth(newValue)
    setInputWidth(`${width}px`)
  }

  return {
    value,
    inputWidth,
    handleInput,
    hiddenText,
  }
}
