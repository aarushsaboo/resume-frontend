import { useDynamicWidth } from "../../hooks/useDynamicWidth"
import { useDatePicker } from "../../hooks/useDatePicker"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styles from "./Degree.module.css"

const Degree = ({ degree, leftIconStyles, rightIconStyles }) => {
  const {
    value: degreeText,
    inputWidth: degreeWidth,
    handleInput: handleDegreeInput,
    hiddenText: degreeHiddenText,
  } = useDynamicWidth({ placeholder: degree })

  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    isStartPickerOpen,
    isEndPickerOpen,
    toggleStartPicker,
    toggleEndPicker,
    formatDate,
  } = useDatePicker()

  return (
    <div className={styles.degree}>
      <div className={styles.part1}>
        <div className={leftIconStyles}></div>
        <div className={styles.text}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder={degree}
              value={degreeText}
              onChange={handleDegreeInput}
              className={styles.input}
              style={{ width: degreeWidth }}
            />
          </div>
          <span
            ref={degreeHiddenText}
            className={styles.hiddenText}
            aria-hidden="true"
          ></span>
        </div>
        <div className={rightIconStyles}></div>
      </div>
      <div className={styles.part2}>
        <div className={styles.graduationDate}>
          <div className={styles.datePickerWrapper}>
            <div className={styles.dateText} onClick={toggleStartPicker}>
              Start Date{startDate ? `: ${formatDate(startDate)}` : ""}
            </div>
            {isStartPickerOpen && (
              <div className={styles.pickerContainer}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date)
                    toggleStartPicker()
                  }}
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                  inline
                />
              </div>
            )}
          </div>
          <span className={styles.dateSeparator}>:</span>
          <div className={styles.datePickerWrapper}>
            <div className={styles.dateText} onClick={toggleEndPicker}>
              Finish Date{endDate ? `: ${formatDate(endDate)}` : ""}
            </div>
            {isEndPickerOpen && (
              <div className={styles.pickerContainer}>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date)
                    toggleEndPicker()
                  }}
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                  inline
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Degree
