import React, { useRef, useState } from "react"
import html2pdf from "html2pdf.js"

import styles from "./ResumeWorkspace.module.css"

import Personal from "./components/Personal/Personal"
import Heading from "../../components/Heading/Heading"
import Organization from "../../components/Organization/Organization"
import Degree from "../../components/Degree/Degree"
import BulletContainer from "../../components/BulletContainer/BulletContainer"
import CustomSection from "../../components/CustomSection/CustomSection"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import SecondSidebar from "./components/SecondSidebar/SecondSidebar"
import FormattingToolbar from "./components/FormattingToolbar/FormattingToolbar"
import ResumeScore from "./components/ResumeScore/ResumeScore"

const ResumeWorkspace = () => {
  const resumeRef = useRef(null)
  const [fileName, setFileName] = useState("Untitled")

  const exportToPDF = () => {
    const element = resumeRef.current

    const opt = {
      margin: [10, 10, 10, 10],
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        logging: false,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "letter",
        orientation: "portrait",
      },
    }

    html2pdf().set(opt).from(element).save()
  }

  return (
    <>
      <Navbar
        exportToPDF={exportToPDF}
        fileName={fileName}
        setFileName={setFileName}
      />
      <div className={styles.resumeWorkspace}>
        <Sidebar />
        <SecondSidebar />
        <FormattingToolbar />
        <div className={styles.mainContent}>
          <ResumeScore />

          {/* Resume Content */}
          <div
            ref={resumeRef}
            id="resumePdfContent"
            className={styles.resumeContent}
          >
            <Personal
              leftIconStyles={styles.leftIcon}
              rightIconStyles={styles.rightIcon}
            />
            <div className={styles.education}>
              <Heading
                heading={"EDUCATION"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
              />
              <div className={styles.container}>
                <Organization
                  organization={"University"}
                  leftIconStyles={styles.leftIcon}
                  rightIconStyles={styles.rightIcon}
                />
                <Degree
                  degree={"Degree"}
                  leftIconStyles={styles.leftIcon}
                  rightIconStyles={styles.rightIcon}
                />
              </div>
            </div>
            <div className={styles.projectExperience}>
              <Heading
                heading={"PROJECT EXPERIENCE"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
              />
              <div className={styles.container}>
                {/* first company */}
                <Organization
                  organization={"Organization"}
                  leftIconStyles={styles.leftIcon}
                  rightIconStyles={styles.rightIcon}
                />
                <Degree
                  degree={"Title"}
                  leftIconStyles={styles.leftIcon}
                  rightIconStyles={styles.rightIcon}
                />
                <BulletContainer />
                {/* second company */}
                <Organization
                  organization={"Organization"}
                  leftIconStyles={styles.leftIcon}
                  rightIconStyles={styles.rightIcon}
                  hasTopMargin={true}
                />
                <Degree
                  degree={"Title"}
                  leftIconStyles={styles.leftIcon}
                  rightIconStyles={styles.rightIcon}
                />
                <BulletContainer />
              </div>
            </div>
            <div className={styles.leadershipExperience}>
              <Heading
                heading={"WORK EXPERIENCE"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
              />
              {/* first company */}
              <Organization
                organization={"Company"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
              />
              <Degree
                degree={"Job Title"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
              />
              <BulletContainer />
              {/* second company */}
              <Organization
                organization={"Company"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
                hasTopMargin={true}
              />
              <Degree
                degree={"Job Title"}
                leftIconStyles={styles.leftIcon}
                rightIconStyles={styles.rightIcon}
              />
              <BulletContainer
                bullet={["My first point", "My second point", "My third point"]}
              />
            </div>
            <CustomSection
              leftIconStyles={styles.leftIcon}
              rightIconStyles={styles.rightIcon}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeWorkspace
