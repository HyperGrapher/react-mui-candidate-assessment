import { appRoutes } from "config/app_routes";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const Detail = () => {

    return (
        <div>
            <h1>Payment Detail</h1>
            <Link to={appRoutes.HOME}>Home</Link>
        </div>
    )
}

export default Detail;

