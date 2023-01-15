import { Route, Routes } from 'react-router-dom';

// custom components
import Canvas from './components/Canvas';
import Navigator from './components/common/Navigator';
import Information from './components/Information';

function App() {
  console.group('Remote App 0 history & location');
  console.log(window.history);
  console.log(window.location);
  console.groupEnd();
  return (
    <div>
      <Navigator />

      <Routes>
        <Route path="/" element={<Canvas />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
