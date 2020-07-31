import React from 'react'
import './style.css'
import logo from '../../assets/img/LogoMain.png'
import { Link } from 'react-router-dom'
// import ButtonLink from '../../components/ButtonLink'
// importando com styledComponents
import { Button as ButtonLink } from '../ButtonLink/style'

const Nav = () => (
    <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={logo} alt=""/>
        </Link>
        <ButtonLink as={Link} to="/cadastro/video" className="ButtonLink">
            Novo video
        </ButtonLink>
    </nav>
)

export default Nav