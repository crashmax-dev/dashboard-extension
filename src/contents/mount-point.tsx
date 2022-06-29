import cssText from 'data-text:~src/styles/mount-point.css'
import type { PlasmoContentScript } from 'plasmo'

export const config: PlasmoContentScript = {
  matches: ['https://example.com/']
}

export const getMountPoint = () => {
  return document.querySelector('h1.text')
}

export const getStyle = () => {
  const style = document.createElement('style')
  style.textContent = cssText
  return style
}

const MountPoint = () => {
  return <span>Mount Point</span>
}

export default MountPoint
