import type { PlasmoContentScript } from 'plasmo'

export const config: PlasmoContentScript = {
  matches: ['https://www.twitch.tv/'],
  css: ['../styles/twitch.css']
}

export const getRootContainer = () => {
  return document.querySelector(
    'div.Layout-sc-nxg1ff-0.hWJFll > div:nth-child(5)'
  )
}

window.addEventListener('load', () => {
  console.log('Twitch injected')
})

const ReplaceBitsButton = () => {
  const openDashboard = () => {
    window.open('https://dashboard.twitch.tv/u/vs_code/home', '_blank')
  }

  return (
    <div className="Layout-sc-nxg1ff-0 fXnqHq">
      <div className="Layout-sc-nxg1ff-0 hfhxmD">
        <div className="InjectLayout-sc-588ddc-0 ktQueN">
          <button
            className="ScCoreButton-sc-1qn4ixc-0 ffyxRu ScButtonIcon-sc-o7ndmn-0 nHKTN"
            aria-label="Закрыть ветки"
            data-a-target="whisper-box-button"
            aria-describedby="93cc6e6bf56b0da67bdd218a6141634d"
            onClick={() => openDashboard()}
          >
            <div className="ButtonIconFigure-sc-1ttmz5m-0 fbCCvx">
              <div className="ScIconLayout-sc-1bgeryd-0 cXxJjc">
                <div className="ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect">
                  <div className="ScAspectSpacer-sc-1sw3lwy-0 dsswUS" />
                  <svg
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 20 20"
                    x="0px"
                    y="0px"
                    className="ScIconSVG-sc-1bgeryd-1 ifdSJl"
                  >
                    <g>
                      <path d="M7 10h2v4H7v-4zM13 6h-2v8h2V6z" />
                      <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm12 2H4v12h12V4z"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        aria-label="Личные сообщения"
        role="button"
        data-click-out-id="threads-box"
        data-a-target="threads-box-closed"
        className="Layout-sc-nxg1ff-0 fcPbos InjectLayout-sc-588ddc-0 eSiyUi whispers-threads-box__container"
      />
    </div>
  )
}

export default ReplaceBitsButton
