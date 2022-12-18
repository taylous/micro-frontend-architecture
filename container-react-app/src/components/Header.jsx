import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ backgroundColor: '#333', color: '#fff' }}>
      Header
      <div style={{ display: 'flex' }}>
        <Link to={'/'}>
          <button type="button">react</button>
        </Link>
        <Link to={'/vue'}>
          <button type="button">vue</button>
        </Link>
      </div>
    </div>
  );
}
