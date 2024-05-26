import React, { useEffect, useRef } from 'react'
import styles from './Search.module.scss'

export const Search = ({ value, onChange }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    // После каждого обновления value устанавливаем фокус на инпуте
    inputRef.current.focus()
  }, [value])

  const handleChange = (event) => {
    const searchValue = event.target.value
    onChange(searchValue)
  }

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <img src="/icons/icon-search.svg" alt="Иконка поиска" />
    </div>
  )
}
