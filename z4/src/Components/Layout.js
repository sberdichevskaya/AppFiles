import {Link, Outlet} from "react-router-dom";
import React from "react";
import "../styles.css"

const Layout = () => {
    return (
        <div style={{backgroundColor: "rgba(224,172,227,0.17)", width: "240px", position: "absolute"}}>
            <header >

                <Link className="link" to="/Authorization"> Войти </Link>
                <Link className="link" to="/Registration"> Зарегистрироваться </Link>
                <hr style={{ size: '3px', width: '210px'}} />
            </header>
            <main>

                <Outlet />
            </main>
        </div>
    )
}

export {Layout}

