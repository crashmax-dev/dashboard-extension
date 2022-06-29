import type { PlasmoContentScript } from 'plasmo'

export const config: PlasmoContentScript = {
  matches: ['https://example.com/'],
  css: ['../styles/root-container.css']
}

export const getRootContainer = async () => {
  return document.querySelector('body')
}

function RootContainer() {
  return <h1 className="text">Root Container</h1>
}

export default RootContainer
