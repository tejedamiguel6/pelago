import { getData } from '../components/global/FetchData'
import styles from '../globals.css'

import Questions from '../components/Questions'

export default async function page() {
  const data = await getData()

  console.log(data)
  return (
    <div className={styles.container}>
      <h1>All you need to know</h1>

      <div>
        {data.map((q, index) => {
          return (
            <div key={index}>
              <Questions questions={q} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
