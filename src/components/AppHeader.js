const AppHeader = ({title}) => {
  return (
    <div className="app-header dragable">
      <div className="flex w-auto h-auto dragable text-sm my-auto font-semibold text-gray-500">
        {title}
      </div>
      <div className="flex non-dragable">
        {/* dark mode toggle button */}
        <div class="flex justify-center items-center align-middle mr-8 my-auto space-x-2">
          <span className="text-xs text-gray-500 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <div>
            <input type="checkbox" className="hidden" name="" id="toggle" />
            <label for="toggle">
              <div className="w-9 h-5 flex items-center bg-gray-300 dark:bg-gray-500 rounded-full p-1">
                <div className="toggle-dot w-4 h-4 bg-gray-500 dark:bg-black-400 rounded-full shadow-md transform duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>
          <span className="text-xs text-gray-500 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </div>
        {/* dark mode toggle button end */}
        <div
          className="w-4 h-4 my-auto rounded-full bg-yellow-400"
          id="minimizeBtn"
        ></div>
        <div
          className="w-4 h-4 my-auto ml-2 rounded-full bg-green-600"
          id="maximizeBtn"
        ></div>
        <div
          className="w-4 h-4 my-auto ml-2 rounded-full bg-red-800"
          id="closeBtn"
        ></div>
      </div>
    </div>
  );
};

export default AppHeader;
