import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';

// custom components
import Home from './components/Home';

// micro frontends prefix
import { prefix } from './micro/remote0/urls';

// micro frontends
const RemoteApp0 = lazy(() => import('./micro/remote0/App'));

function App() {
  console.group('Container history & location');
  console.log(window.history);
  console.log(window.location);
  console.groupEnd();
  return (
    <div>
      <div>
        <h1>Container</h1>
      </div>

      <Header />

      <div>
        <Suspense fallback={<div>load micro frontend...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`${prefix}/*`} element={<RemoteApp0 />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
