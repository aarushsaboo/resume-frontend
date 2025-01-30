import { useState, useRef, useEffect } from "react"
import styles from "./CustomSection.module.css"
import Heading from "../Heading/Heading"

const EntryRow = ({ onKeyDown, leftIconStyles, rightIconStyles }) => {
  const [keyText, setKeyText] = useState("")
  const [valueText, setValueText] = useState("")
  const keyInputRef = useRef(null)
  const valueTextareaRef = useRef(null)

  const handleKeyInput = (e) => {
    setKeyText(e.target.value)
    adjustInputWidth(e.target)
  }

  const handleValueInput = (e) => {
    setValueText(e.target.value)
    adjustTextareaHeight(e.target)
  }

  const adjustInputWidth = (element) => {
    if (!element) return
    // Create temporary span to measure text width
    const span = document.createElement("span")
    span.style.fontSize = "14px"
    span.style.fontFamily = "Times New Roman"
    span.style.fontWeight = "700"
    span.style.visibility = "hidden"
    span.style.position = "absolute"
    span.style.whiteSpace = "pre"
    span.textContent = element.value || element.placeholder
    document.body.appendChild(span)
    const width = span.getBoundingClientRect().width
    document.body.removeChild(span)
    // Add some padding to prevent text from touching the edges
    element.style.width = `${Math.max(100, width + 10)}px`
  }

  const adjustTextareaHeight = (element) => {
    if (!element) return
    element.style.height = "auto"
    element.style.height = `${element.scrollHeight}px`
  }

  useEffect(() => {
    adjustInputWidth(keyInputRef.current)
    adjustTextareaHeight(valueTextareaRef.current)
  }, [keyText, valueText])

  return (
    <div className={styles.container2}>
      <div className={leftIconStyles}></div>
      <div className={styles.fieldGroup}>
        <div className={styles.untitled1}>
          <input
            ref={keyInputRef}
            type="text"
            value={keyText}
            onChange={handleKeyInput}
            onKeyDown={onKeyDown}
            className={styles.input}
            placeholder="Untitled"
          />
          <div className={rightIconStyles}></div>
        </div>
        <div className={styles.colon}>:&nbsp;</div>
        <div className={styles.untitled2}>
          <textarea
            ref={valueTextareaRef}
            value={valueText}
            onChange={handleValueInput}
            onKeyDown={onKeyDown}
            className={styles.textarea}
            placeholder="Untitled"
          />
        </div>
      </div>
    </div>
  )
}

const CustomSection = ({ leftIconStyles, rightIconStyles }) => {
  const [entries, setEntries] = useState([{ id: 1 }])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      const newEntry = {
        id: Math.max(...entries.map((e) => e.id)) + 1,
      }
      setEntries([...entries, newEntry])
    }
  }

  return (
    <div className={styles.customSection}>
      <Heading
        heading="CUSTOM SECTION"
        leftIconStyles={leftIconStyles}
        rightIconStyles={rightIconStyles}
      />
      {entries.map((entry) => (
        <EntryRow
          key={entry.id}
          onKeyDown={handleKeyDown}
          leftIconStyles={leftIconStyles}
          rightIconStyles={rightIconStyles}
        />
      ))}
    </div>
  )
}

export default CustomSection
