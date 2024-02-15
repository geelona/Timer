function App() {
  return (
    <div className=" mainContainer w-screen h-screen flex items-center justify-center">
      <div className=" mainContainer__wrapper flex flex-col items-center gap-8">
        <div className="mainContainer__wrapper__currentTime text-7xl font-bold">
          00:00
        </div>
        <div className="mainContainer__wrapper__comnponentRenders text-xl text-center">
          Number of component renders: <span>0</span>
        </div>
        <div className="mainContainer__wrapper__underline w-full"></div>
        <div className="mainContainer__wrapper__buttons flex flex-col gap-4">
          <button className="mainContainer__wrapper__buttons__play">
            <svg
              width="1rem"
              height="1rem"
              viewBox="-0.5 0 7 7"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>play [#1003]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="white"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-347.000000, -3766.000000)"
                  fill="white"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                      id="play-[#1003]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p>Play</p>
          </button>
          <button className="mainContainer__wrapper__buttons__pause">
            <svg
              width="1rem"
              height="1rem"
              viewBox="-1 0 8 8"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>pause [#1006]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-227.000000, -3765.000000)"
                  fill="white"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606"
                      id="pause-[#1006]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p>Pause</p>
          </button>
          <button className="mainContainer__wrapper__buttons__reset">
            <p>Reset</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
