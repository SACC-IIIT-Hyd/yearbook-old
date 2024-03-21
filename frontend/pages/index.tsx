import React from 'react'
import styles from '../styles/index.module.css';

const index = () => {
  return (
    <main >
      <section className={styles.main}>

        <div className={styles.mainContent}>
          <div className={styles.content}>
            <div className={styles.content_head}>
              Lets make the <span className={styles.yearbook_text}>
                <span className={styles.red}>yea</span><span className={styles.blue}>rbo</span><span className={styles.yellow}>ok</span>
                </span> fun this year
            </div>
            <div className={styles.content_body}>

            the yearbook portal is a gateway to your college memories where you can post crazy pictures and interesting captions for yourselves and your friends. it is an effort by the Student Alumni Connect Cell to help you relive your college life and capture those beautiful memories that you shared with your seniors, batchies and juniors.
            </div>
          </div>

        </div>
        <div className={styles.sideImage}>
          <h1>YEARBOOK</h1>
        </div>
      </section>

      <div className={styles.video_area} >
        <h3>A Walkthrough of the platform </h3><div className={styles.video_area_head}></div>
        <div className={styles.video_container}>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/1H9lFm4pRxA" title="IIITH Campus" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div>
      </div>

      <div className={styles.physicalbook_area}>
        <div className={styles.physicalbook_container}>
          <h3>Opt-in for the physical yearbook</h3>
          <h5>get physical copy,cherish it for the years to come</h5>
          <button>click here to get one</button>
        </div>
      </div>
    </main>
  )
}

export default index