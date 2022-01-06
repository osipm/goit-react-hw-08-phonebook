import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import RenderNavigation from './components/renderNavigation/renderNavigation';
import Login from './components/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/register/Register';
import authOperations from './redux/auth/auth-operation';
import authSelectors from './redux/auth/auth-selector';
import RenderList from './components/renderList/renderList';
import s from './App.module.css';
export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <RenderNavigation />
      <div className={s.list}>
        <Suspense fallback={<RenderNavigation />}>
          <Routes>
            <Route path="/register" element={!isLoggedIn && <Register />} />
            <Route exact path="/login" element={!isLoggedIn && <Login />} />
          </Routes>
        </Suspense>
        {isLoggedIn && <RenderList />}
      </div>
    </div>
  );
}
