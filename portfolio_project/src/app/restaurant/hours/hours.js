import React from 'react'
import styles from './hours.module.css'

const hours = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Operating Hours</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='opening hours' />
          <input type="text" placeholder='closing hours' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default hours