export interface TelegramUserData {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  auth_date: number
  hash: string
}

export interface TelegramLoginWidgetProps {
  botId: string
  className?: string
  requestAccess?: boolean
  onLogin: (user: TelegramUserData) => void
}

export interface Popup {
  window: Window | null
  authFinished: boolean
}
