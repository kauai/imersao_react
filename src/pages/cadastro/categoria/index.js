/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SketchPicker, BlockPicker, CirclePicker } from 'react-color';
import FormField from '../../../components/FormField';

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
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(e) {
    // console.log(e.target.getAttribute('name'))
    console.log(e);
    // setValue(
    //   e.target.getAttribute('name'),
    //   e.target.value,
    // );
  }

  // ============

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      // const URL = 'http://localhost:3001/categorias';
      const URL = (window.location.hostname === 'localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://alura-flix20.herokuapp.com/categorias';
      // changes made by me
      (async () => {
        try {
          const result = await (await fetch(URL)).json();
          // setCategorias(JSON.parse(JSON.stringify(result)));
          setCategorias(result);
        } catch (error) {
          throw new Error('Não foi possível pegar os dados');
        }
      })();
      // fetch(URL)
      //   .then(async (res) => {
      //     if (res.ok) {
      //       const result = await res.json();
      //       setCategorias(result);
      //       return;
      //     }
      //     throw new Error('Não foi possível pegar os dados');
      //   });
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
        setValues(valoresIniciais);
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
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        {/* <SketchPicker /> */}
        {/* <BlockPicker /> */}
        {/* <CirclePicker style={{ marginBottom: '50px' }} onChange={handleChange} /> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

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
      {/* {JSON.stringify(categorias)} */}

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
