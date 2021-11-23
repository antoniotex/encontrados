import { useEffect } from "react";
import Header from "../components/Header";
import Routes from "../pages/routes"

const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{ paddingTop: 100 }}>
                <Routes />
            </div>
        </div>
    )
}

export default Layout
