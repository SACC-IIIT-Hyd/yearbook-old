import React from 'react'
import styles from '../styles/index.module.css';

const index = () => {
  return (
    <main >
      <section className={styles.main}>
          <div className={styles.mainContainer}>
            <div className={styles.mainHeading}>
              YEARBOOK
              {/* <span className={styles.red}>YEA</span><span className={styles.blue}>RB</span><span className={styles.yellow}>OOK</span> */}
            </div>
            <div className={styles.mainContent}>
            As you reach the end of your college journey, we reflect on the memories you've made, the friendships you've forged, and the futures that lie ahead. Yearbook is the place where you can post crazy pictures, write interesting captions and generate creative polls for yourselves and your friends. You may be moving on to different paths, but the bonds you've formed will stay forever. Give a shot to cherishing these priceless bonds and reliving the most iconic days of your college life through this initiative of SARC, curated just for you!
            </div>

          </div>
         
      </section>

      <div className={styles.video_area} >
        <h3>A Walkthrough of the platform </h3><div className={styles.video_area_head}></div>
        <div className={styles.video_container}>
          <iframe
           src="https://youtu.be/VvqJhZqVCJg" title="Yearbook Portal 2022 Walkthrough"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

           </iframe>

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


