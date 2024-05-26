import React, { useState, useEffect } from 'react'
import styles from './UsersSearchPage.module.scss'
import { UserCard } from '../../components/UserCard/UserCard.jsx'
import { Search } from '../../components/Search/Search.jsx'
import { UserInfoModal } from '../../components/Modals/UserInfoModal/UserInfoModal.jsx'

export const UsersSearchPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchUsers = async (term = '') => {
    setLoading(true)
    try {
      const url = term
        ? `http://127.0.0.1:3000?term=${encodeURIComponent(term)}`
        : 'http://127.0.0.1:3000/'
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных')
      }
      const data = await response.json()
      // Сортировка пользователей по имени
      data.sort((a, b) => a.name.localeCompare(b.name))
      setUsers(data)
    } catch (error) {
      console.error('Ошибка при загрузке пользователей:', error)
      setError('Ошибка загрузки данных. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(searchTerm)
  }, [searchTerm])

  if (loading) {
    return <div className={styles.users__massage}>Загрузка...</div>
  }

  if (error) {
    return <div className={styles.users__massage}>{error}</div>
  }

  const openModal = (user) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.users}>
      <Search value={searchTerm} onChange={setSearchTerm} />
      {users.length > 0 ? (
        <div className={styles.users__cards}>
          {users.map((user, index) => (
            <UserCard key={index} user={user} openModal={openModal} />
          ))}
        </div>
      ) : (
        <div className={styles.users__massage}>
          Пользователи с указанным ФИО не найдены
        </div>
      )}

      {isModalOpen && (
        <UserInfoModal user={selectedUser} closeModal={closeModal} />
      )}
    </div>
  )
}
