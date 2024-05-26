import React from 'react'
import styles from './UserCard.module.scss'

export function UserCard({ user, openModal }) {
  const handleOpenModal = () => {
    openModal(user)
  }

  return (
    <div className={styles.user} onClick={handleOpenModal}>
      <div className={styles.user__content}>
        <h2 className={styles.user__name}>{user.name}</h2>
        <div className={styles.user__contact}>
          <div className={styles.user__phone_img}>
            <img src="/icons/icon-phone.svg" alt="Иконка телефона" />
          </div>
          <p className={styles.user__phone}>{user.phone}</p>
        </div>
        <div className={styles.user__contact}>
          <img src="/icons/icon-mail.svg" alt="Иконка почты" />
          <p className={styles.user__email}>{user.email}</p>
        </div>
      </div>
    </div>
  )
}
