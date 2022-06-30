import { Route, Routes } from 'react-router-dom'
import { AuthPage } from './auth'
import { HomePage } from './home'
import { SettingsPage } from './settings'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/settings"
        element={<SettingsPage />}
      />
      <Route
        path="/auth"
        element={<AuthPage />}
      />
    </Routes>
  )
}
