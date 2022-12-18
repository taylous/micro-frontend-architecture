import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MicroFrontend from './lib';
// import { createBrowserHistory } from "history";

// const defaultHistory = createBrowserHistory();

const { REACT_APP_REACT: MICRO_REACT_APP, REACT_APP_VUE: MICRO_VUE_APP } = process.env;

console.log(MICRO_REACT_APP, MICRO_VUE_APP);

function ReactApp() {
  return (
    <div>
      <MicroFrontend host={MICRO_REACT_APP} name="ReactApp" />
    </div>
  );
}

function VueApp() {
  return (
    <div>
      <MicroFrontend host={MICRO_VUE_APP} name="VueApp" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />

      <div>
        <div id={'ReactApp-container'}></div>
        <div id={'VueApp-container'}></div>
        <Routes>
          <Route path="/" element={<ReactApp />} />
          <Route path="/vue" element={<VueApp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
