import type { PlasmoContentScript } from 'plasmo'

export const config: PlasmoContentScript = {
  matches: ['<all_urls>'],
  all_frames: true
}

window.addEventListener('load', () => {
  console.log('context-menu', chrome)
  // chrome.contextMenus.create({
  //   title: 'context menu',
  //   onclick(info, tab) {
  //     console.log(info, tab)
  //   }
  // })
})
