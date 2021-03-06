/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { SketchPicker, BlockPicker, CirclePicker } from 'react-color';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

const Main = styled.main`
   margin-top:100px;
   padding:0 80px;
   flex:1;
`;

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, handleChange, clearForm] = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  // ============

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = (window.location.hostname === 'localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://alura-flix20.herokuapp.com/categorias';
      (async () => {
        try {
          const result = await (await fetch(URL)).json();
          setCategorias(result);
        } catch (error) {
          throw new Error('Não foi possível pegar os dados');
        }
      })();
    }
  }, []);

  return (
    <Main>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        if (!values.nome || !values.descricao || !values.cor) {
          alert('É preciso preencher o formulario');
          return;
        }
        setCategorias([...categorias, values]);
        clearForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            border: 'none',
            padding: '10px',
            background: '#257be5',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Cadastrar
        </button>
      </form>

      <ul style={{ listStyle: 'none' }}>
        {categorias.map((categoria, indice) => (
          <li style={{ borderRadius: '5px', padding: '10px', background: `${categoria.cor}` }} key={`${categoria}${indice}`}>
            Nome:
            {' '}
            {categoria.nome || categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </Main>
  );
}

export default CadastroCategoria;
