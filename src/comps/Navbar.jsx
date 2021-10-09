import React from 'react'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import '../styles/Navbar.scss'
import { useState } from 'react'
import Menu from './Menu'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)




    return (
        <div className="nav-container">
            <div className="menu-icon-container">
                <h1 className="logo">
                    <Link to="/">
                        Crypto <span>Wall Street</span>
                    </Link>
                </h1>
                {showMenu && <MenuFoldOutlined className="menu-open" onClick={() => setShowMenu(false)} />}
                {!showMenu && <MenuUnfoldOutlined className="menu-close" onClick={() => setShowMenu(true)} />}
            </div>
            <div className="menu-container">
                {showMenu && <Menu />}
                <div className="desktop-menu">
                    <Menu />
                </div>
            </div>

        </div>
    )
}

export default Navbar
