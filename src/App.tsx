import { Fragment, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AnimatedPageContainer from 'components/animated-page/AnimatedPage';
import { appRoutes } from 'config/app_routes';
import Home from 'pages/home/Home';
import Detail from 'pages/detail/Detail';
import Login from 'pages/login/Login';
import { authService } from 'services/auth.service';
import useAuthStore from 'store/auth.store';
import { useNavigate } from 'react-router-dom';
import apiService from 'services/api.service';
import ProtectedRoute from 'components/protected-route/ProtectedRoute';

function App() {

  const loc = useLocation()
  const navigate = useNavigate()
  const setUser = useAuthStore(store => store.setUser)

  async function getUser() {
    const user = await apiService.getUser()
    setUser(user);
  }

  useEffect(() => {

    authService.token$.subscribe(token => {
      if (token) getUser()
    })

  }, [])

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path={appRoutes.HOME} element={<AnimatedPageContainer />}>
            {/* PROTECTED ROUTES */}
            <Route element={<ProtectedRoute />}>
              <Route index element={<Home />} />
              <Route path={appRoutes.BILL_DETAIL} element={<Detail />} />
            </Route>
            {/* PUBLIC ROUTES */}
            <Route path={appRoutes.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Fragment>
  )
}

export default App;
