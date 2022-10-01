import { Fragment } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AnimatedPageContainer from 'components/animated-page/AnimatedPage';
import { appRoutes } from 'config/app_routes';
import Home from 'pages/home/Home';
import Detail from 'pages/detail/Detail';
import Login from 'pages/login/Login';

function App() {

  const loc = useLocation()

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path={appRoutes.HOME} element={<AnimatedPageContainer />}>
            <Route index element={<Home />} />
            <Route path={appRoutes.BILL_DETAIL} element={<Detail />} />
            <Route path={appRoutes.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Fragment>
  )
}

export default App;
