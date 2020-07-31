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

const Categoria = () => {
    return <Main>
        <h1>Cadastro categoria</h1>
        <Link to="/">Home</Link>
    </Main>
}

export default Categoria