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

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum adipisci vel alias repellat. Eos minima, in aliquid laudantium a nam repellat aliquam cum fugit ex nulla obcaecati et vero eligendi esse aperiam dolores totam incidunt dolorum consequuntur voluptatem eveniet distinctio! Asperiores cumque accusantium rerum labore fuga voluptatibus eveniet, facilis consequuntur beatae hic maxime modi. Deserunt, ad ea vero nostrum mollitia incidunt quae ex sit molestiae magni dolore accusamus earum cum molestias adipisci animi exercitationem possimus illum. Possimus earum ad vel? Adipisci repellat commodi autem rerum est iusto earum fugit, aperiam veniam aliquid perferendis consequuntur corrupti impedit eligendi vero fuga!
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


