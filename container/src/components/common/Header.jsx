import { Link } from 'react-router-dom';
import { prefix } from '../../micro/remote0/urls';

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

      <div>
        <Link to={`${prefix}`}>
          <button type="button">Remote App 0</button>
        </Link>
      </div>
    </div>
  );
}
