import React from "react"
import styles from "./FormattingToolbar.module.css"

const FormattingToolbar = () => {
  return (
    <div className={styles.formattingBar}>
      <button id="undoButton">←</button>
      <button id="redoButton">→</button>

      <div className={styles.zoomControls}>
        <button id="zoomOut">-</button>
        <span className={styles.zoomValue}>100%</span>
        <button id="zoomIn">+</button>
      </div>

      <div className={styles.pageNumberControls}>
        <button id="prevPage">-</button>
        <span className={styles.pageNumber}>1</span>
        <button id="nextPage">+</button>
      </div>

      <select id="fontFamily">
        <option value="Times New Roman">Times New Roman</option>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
      </select>

      <button id="boldButton">B</button>
      <button id="italicButton">I</button>
      <button id="underlineButton">U</button>
      <button className={styles.textColorButton}>A</button>

      <div className={styles.textSizeButton}>
        <button id="textSizeMinus">-</button>
        <span>T</span>
        <button id="textSizePlus">+</button>
      </div>

      <div className={styles.lineSpacingButton}>
        <button id="lineSpacingMinus">-</button>
        <span>☰↕</span>
        <button id="lineSpacingPlus">+</button>
      </div>

      <button className={styles.marginButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="8" y1="3" x2="8" y2="21"></line>
          <line x1="16" y1="3" x2="16" y2="21"></line>
        </svg>
      </button>

      <button className={styles.bulletButton}>
        <div className={styles.row}>
          <span className={styles.bullet}>●</span>
          <span className={styles.line}>──</span>
        </div>
        <div className={styles.row}>
          <span className={styles.bullet}>●</span>
          <span className={styles.line}>──</span>
        </div>
        <div className={styles.row}>
          <span className={styles.bullet}>●</span>
          <span className={styles.line}>──</span>
        </div>
      </button>

      <button id="redoRotateButton">↻</button>
    </div>
  )
}

export default FormattingToolbar
