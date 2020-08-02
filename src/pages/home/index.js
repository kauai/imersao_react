/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react';
import '../../style.css';
// import dadosInicial from '../../data/dados_iniciais.json';
import Load from '../../components/Load';
import Banner from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Api from '../../repositories/Api';

function Home() {
  const [dadosInicial, setValues] = useState([]);

  useEffect(() => {
    (new Api()).getVideos()
      .then((item) => {
        setValues(item);
      });
  }, []);
  // console.log(dadosInicial)
  // return [];

  return !dadosInicial.length && <Load />
      || (
      <>
        <Banner
          url={dadosInicial[0].videos[0].url}
          videoTitle={dadosInicial[0].videos[0].titulo}
          videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e
        JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.
        Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        />
        {dadosInicial.map((item, key) => (!key
          ? <Carousel ignoreFirstVideo category={item} />
          : <Carousel category={item} />))}
      </>
      );
}

export default Home;
