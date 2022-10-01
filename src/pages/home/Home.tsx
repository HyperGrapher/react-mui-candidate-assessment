import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import gsap from 'gsap'
import { appRoutes } from 'config/app_routes'

const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Due Payments</title>
      </Helmet>
      
      <h1>Home Page</h1>
      <Link to={appRoutes.BILL_DETAIL}>Payment Detail</Link>

    </div>
  )
}

export default Home;

