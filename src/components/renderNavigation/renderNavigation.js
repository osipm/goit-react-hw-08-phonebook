import { useSelector } from 'react-redux';
import Navigation from '../navigation/navigation';
import authSelectors from '../../redux/auth/auth-selector';
import UserMenu from '../userMenu/UserMenu';
import s from './renderNavigation.module.css';

export default function RenderApp() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.navigation}>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
}
