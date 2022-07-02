import { useState } from 'react'
import { LoadingIcon, TelegramIcon } from './icons'
import { TelegramAuth } from './telegram-auth-api'
import type { TelegramLoginWidgetProps, TelegramUserData } from './types'

export { TelegramUserData }

export function TelegramLoginWidget({
  botId,
  onLogin,
  className,
  requestAccess = true
}: TelegramLoginWidgetProps) {
  const [popup, setPopup] = useState<Window>()
  const [isLoading, setIsLoading] = useState(false)

  const onAuth = () => {
    if (!isLoading) {
      const widget = new TelegramAuth(botId, requestAccess)
      widget.auth(onLogin, setIsLoading)
      setPopup(widget.popup.window!)
    } else if (popup) {
      popup.focus()
    }
  }

  return (
    <div
      className={className}
      onClick={onAuth}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '16px',
        borderRadius: '999px',
        fontFamily: 'system-ui',
        userSelect: 'none',
        cursor: 'pointer',
        color: '#FFFFFF',
        backgroundColor: '#54A9EB'
      }}
    >
      {isLoading ? <LoadingIcon /> : <TelegramIcon />}
      Log in with Telegram
    </div>
  )
}
