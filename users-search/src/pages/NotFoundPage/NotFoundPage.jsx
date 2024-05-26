import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.notFound__wrap}>
      <h1>Страница не найдена</h1>
      <button className={styles.notFound__button} onClick={handleGoHome}>
        Вернуться на главную
      </button>
    </div>
  )
}
