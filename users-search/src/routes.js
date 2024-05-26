import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UsersSearchPage } from './pages/UsersSearchPage/UsersSearchPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersSearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
