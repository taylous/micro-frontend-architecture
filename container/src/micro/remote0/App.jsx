import { useEffect, useRef } from 'react';

import { mount, unmount } from 'remote0/App';
import { prefix } from './urls';

export default function App() {
  const rootContainer = useRef();
  const rootRef = useRef();

  useEffect(() => {
    const renderTimeout = setTimeout(() => {
      if (rootContainer.current && mount) {
        rootRef.current = mount(rootContainer.current, prefix);
      }
    });

    return () => {
      clearTimeout(renderTimeout);

      setTimeout(() => {
        if (rootRef.current) {
          unmount(rootRef.current);
        }
      });
    };
  }, []);

  return <div ref={rootContainer} id={'remote-react-0_root'} />;
}
