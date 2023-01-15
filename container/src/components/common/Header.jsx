import { Link } from 'react-router-dom';
import { prefix } from '../../micro/remote0/urls';
import { prefix as remote1Prefix } from '../../micro/remote1/urls';

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '50px',
        background: '#0689d8',
      }}
    >
      <div style={{ marginRight: '10px' }}>
        <Link to={'/'}>
          <button type="button">Home</button>
        </Link>
      </div>

      <div style={{ marginRight: '10px' }}>
        <Link to={`${prefix}`}>
          <button type="button">Remote App 0</button>
        </Link>
      </div>

      <div>
        <Link to={`${remote1Prefix}`}>
          <button type="button">Remote App 1</button>
        </Link>
      </div>
    </div>
  );
}
