import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//46:00 mins
const Main = styled.main`
   background-color:var(--black);
   color:var(--white);
   flex:1;
   padding-top:100px;
   padding-left:5%;
   padding-right:5%;
`

const Video = () => {
    return <Main>
        <h1>Cadastro Video</h1>
        <Link to="/cadastro/categoria">Cadastro categoria</Link>
    </Main>
}

export default Video