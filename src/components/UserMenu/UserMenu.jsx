import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
