import { Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '35px',
        background: '#685bc7',
      }}
    >
      <div style={{ marginRight: '10px' }}>
        <Link to={'/'}>
          <button>Home</button>
        </Link>
      </div>

      <div>
        <Link to={'/info'}>
          <button>Information</button>
        </Link>
      </div>
    </div>
  );
}
