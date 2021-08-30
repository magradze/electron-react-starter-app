
function App() {
  return (
    <div className="app">
      <div className="app-header dragable">
        <div className="flex w-auto h-auto dragable text-sm my-auto font-semibold text-gray-500">Electron React Starter App</div>
        <div className="flex non-dragable">
          <div className="w-4 h-4 my-auto rounded-full bg-yellow-400" id="minimizeBtn"></div>
          <div className="w-4 h-4 my-auto ml-2 rounded-full bg-green-600" id="maximizeBtn"></div>
          <div className="w-4 h-4 my-auto ml-2 rounded-full bg-red-800" id="closeBtn"></div>
        </div>
      </div>

      <div className="app-container">
        <p>Edit App.js and start your application.</p>
      </div>
    </div>
  );
}

export default App;
