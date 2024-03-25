import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivatRoutes';
import PublicRoute from '../../routes/PublicRoutes';
import AppBar from '../appBar';
import Loader from '../loader/Loader';
// import { ToastContainer } from 'react-toastify';
import { authSelectors } from '../../redux/auth'; // importați numai authSelectors aici
import authOperations from '../../redux/auth/authOperations'; // importați fetchCurrentUser și authOperations aici

const PageHome = lazy(() => import('pages/pageHome'));
const PageRegistration = lazy(() => import('pages/pageRegistration'));
const PageLogin = lazy(() => import('pages/pageLogin'));
const PageContacts = lazy(() => import('pages/pageContacts/PageContacts'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                exact="true"
                element={
                  <PublicRoute>
                    <PageHome />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <PageRegistration />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <PageLogin />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <PageContacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
          {/* <ToastContainer autoClose={4700} position="top-center" /> */}
        </>
      )}
    </>
  );
};

export default App;
