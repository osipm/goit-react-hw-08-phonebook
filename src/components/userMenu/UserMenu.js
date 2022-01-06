import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selector';
import { logOut } from '../../redux/auth/auth-operation';
import s from './UserMenu.module.css';
export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);
  return (
    <div>
      <span className={s.user}>{email}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
