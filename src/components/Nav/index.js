import React from 'react'
import './style.css'
import logo from '../../assets/img/LogoMain.png'
// import ButtonLink from '../../components/ButtonLink'
// importando com styledComponents
import { Button as ButtonLink } from '../ButtonLink/style'

const Nav = () => (
    <nav className="Menu">
        <a href="#">
            <img className="Logo" src={logo} alt=""/>
        </a>
        <ButtonLink as="a" href="/home" className="ButtonLink">
            Novo video
        </ButtonLink>
    </nav>
)

export default Nav