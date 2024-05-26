import React, { useEffect, useRef } from 'react'
import styles from './UserInfoModal.module.scss'
import moment from 'moment'

export function UserInfoModal({ user, closeModal }) {
  const modalRef = useRef(null)

  //предотвращение скролла фона при открытом модальном окне
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClose = (event) => {
    // Проверяем, что клик произошел вне модального окна
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal()
    }
  }

  return (
    <div className={styles.modalUser__background} onClick={handleClose}>
      <div className={styles.modalUser} ref={modalRef}>
        <div className={styles.modalUser__header}>
          <h2 className={styles.modalUser__name}>{user.name}</h2>
          <button
            className={styles.modalUser__closeButton}
            onClick={closeModal}
          >
            <img src="/icons/icon-close.svg" alt="Закрыть" />
          </button>
        </div>
        <div className={styles.modalUser__info}>
          <div className={styles.modalUser__infoItem}>
            <p className={styles.modalUser__infoLabel}>Телефон:</p>
            <p className={styles.modalUser__infoValue}>{user.phone}</p>
          </div>
          <div className={styles.modalUser__infoItem}>
            <p className={styles.modalUser__infoLabel}>Почта:</p>
            <p className={styles.modalUser__infoValue}>{user.email}</p>
          </div>
          <div className={styles.modalUser__infoItem}>
            <p className={styles.modalUser__infoLabel}>Дата приема:</p>
            <p className={styles.modalUser__infoValue}>
              {moment(user.hire_date).format('DD.MM.YYYY')}
            </p>
          </div>
          <div className={styles.modalUser__infoItem}>
            <p className={styles.modalUser__infoLabel}>Должность:</p>
            <p className={styles.modalUser__infoValue}>{user.position_name}</p>
          </div>
          <div className={styles.modalUser__infoItem}>
            <p className={styles.modalUser__infoLabel}>Подразделение:</p>
            <p className={styles.modalUser__infoValue}>{user.department}</p>
          </div>
        </div>
        <div className={styles.modalUser__additionalInfo}>
          <p className={styles.modalUser__additionalInfoTitle}>
            Дополнительная информация
          </p>
          <p className={styles.modalUser__additionalInfoText}>
            Разработчики используют текст в качестве заполнителя макета
            страницы. Разработчики используют текст в качестве заполнителя
            макета страницы.
          </p>
        </div>
      </div>
    </div>
  )
}
