declare module 'react-telegram-login' {
  type ButtonSize = 'large' | 'medium' | 'small'

  export interface TelegramUserData {
    id: number
    first_name: string
    last_name?: string
    username?: string
    photo_url?: string
    auth_date: number
    hash: string
  }

  export interface TelegramLoginButtonProps {
    botName: string
    dataOnauth: (data: TelegramUserData) => void
    buttonSize?: ButtonSize
    cornerRadius?: number
    requestAccess?: string
    usePic?: boolean
    lang?: string
    widgetVersion?: number
  }

  const TelegramLoginButton: (props: TelegramLoginButtonProps) => React.FC<TelegramLoginButtonProps>
  export default telegramAuth
}
