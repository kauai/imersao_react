import React from 'react';
import Nav from '../../components/Nav';
import '../../style.css';
import dadosInicial from '../../data/dados_iniciais.json';
import Banner from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Banner
        url={dadosInicial.categorias[0].videos[0].url}
        videoTitle={dadosInicial.categorias[0].videos[0].titulo}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />
      <Carousel ignoreFirstVideo category={dadosInicial.categorias[0]} />
      <Carousel category={dadosInicial.categorias[1]} />
      <Carousel category={dadosInicial.categorias[2]} />
      <Carousel category={dadosInicial.categorias[3]} />
      <Carousel category={dadosInicial.categorias[4]} />
      <Carousel category={dadosInicial.categorias[5]} />
    </>
  );
}

export default Home;
