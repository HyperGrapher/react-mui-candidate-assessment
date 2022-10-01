import { appRoutes } from "config/app_routes";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import { Helmet } from "react-helmet-async";
const Detail = () => {

    return (
        <div>
            <Helmet>
                <title>Payment Detail</title>
            </Helmet>

            <h1>Payment Detail</h1>
            <Link to={appRoutes.HOME}>Home</Link>
        </div>
    )
}

export default Detail;

