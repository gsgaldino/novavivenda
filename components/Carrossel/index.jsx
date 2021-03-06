import React from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import Provider from '../Provider';

import styles from './index.module.css';

export default function Depoimentos(props) {
  const [value, setValue] = React.useState(0);

  const onChange = event => console.log(event);

  const SlideItem = ({
    image,
    title,
    service,
    text,
    footer,
    position,
    renderButtons
  }) => {
    return (
      <div className={styles.slideItem}>
        <div className={styles.thumb}>
          <img
            src={image}
            alt={service}
            title={service}
          />
        </div>
        <div className={styles.content}>
          <div>
            <p className={styles.title}>{title}</p>
            <h3>{service}</h3>
            <h3>Nova Vivenda</h3>
          </div>
          <div>
            <Typography component="p">
              {text}
            </Typography>
          </div>
          <div className={styles.footer}>
            {footer}
            <div className={styles.position}>
              <h3>{`${position}/4`}</h3>
              <div>{renderButtons}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const slideStyle = {
    textAlign: "center",
  };

  const Buttons = () => (
    <div className={styles.buttons}>
      <ButtonBack>
        <ChevronLeft/>
      </ButtonBack>
      <ButtonNext>
        <ChevronRight />
      </ButtonNext>
    </div>
  )

  return (
    <div className={styles.depoimentos}>
      <Provider>
        <h3>Nossos produtos</h3>

        <div className={styles.carouselContainer}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={800}
            totalSlides={4}
            className={styles.carouselProvider}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide1.jpg"
                  title="Para quem quer reformar"
                  service="Casa"
                  text="O pacote Casa Nova Vivenda ?? a solu????o completa para realizar o sonho de reformar com seguran??a, sem dor de cabe??a e sem surpresas. ?? tudo em um s?? lugar: da aprova????o r??pida do cr??dito, mesmo com restri????o no nome, passando pelo financiamento em parcelas poss??veis para a realidade de cada um e j?? incluindo todo material e m??o de obra, at?? o t??o sonhado dia de entrega."
                  footer={<div><p>Sabe o que parece imposs??vel?</p><p>?? o que a gente mais gosta de fazer.</p></div>}
                  position={1}
                  renderButtons={<Buttons />}
                />
              </Slide>
              <Slide index={1} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide2.jpg"
                  title="Para quem ?? arquiteto da causa"
                  service="CX"
                  text="A consultoria CX Nova Vivenda fertiliza o terreno para novos neg??cios. A partir dos aprendizados que tivemos nas quase 3mil reformas que realizamos, oferecemos aos nossos parceiros suporte estrat??gico, t??cnico e operacional para a viabiliza????o de seus neg??cios, com acompanhamento de profissionais qualificados e experientes, e gera????o cont??nua de demanda."
                  footer={<div><p>Para n??s, a evolu????o coletiva ?? o caminho</p><p>para as grandes transforma????es</p></div>}
                  position={2}
                  renderButtons={<Buttons />}
                />
              </Slide>
              <Slide index={2} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide3.jpg"
                  title="Para quem abastece de materiais"
                  service="EIXO"
                  text="A Eixo Nova Vivenda ?? uma facilitadora comercial. 
                  Unimos nossas s??lidas rela????es com as maiores ind??strias de insumos para constru????o do pa??s ?? nossa compreens??o sobre o pequeno varejo nos territ??rios, para melhorar as ofertas para os clientes e ampliar os resultados."
                  footer={<div><p>Acreditamos que ?? poss??vel remodelar as rela????es em redes colaborativas </p><p>que gerem benef??cios para todo mundo.</p></div>}
                  position={3}
                  renderButtons={<Buttons />}
                />
              </Slide>
              <Slide index={3} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide4.jpg"
                  title="Para quem quer avan??ar"
                  service="Tech"
                  text="A Tech Nova Vivenda coloca nossas tecnologias propriet??rias a servi??o do mercado da constru????o civil. Seja para pequenos neg??cios ou grandes empresas, atuantes no setor p??blico ou no privado, nossas ferramentas exclusivas tornam processos mais eficientes, equipes mais produtivas e elevam a qualidade das entregas."
                  footer={<div><p>Porque n??o basta inovar, tem que colocar no mundo.</p></div>}
                  position={4}
                  renderButtons={<Buttons />}
                />
              </Slide>
            </Slider>

          </CarouselProvider>
        </div>

      </Provider>
    </div>
  )
}
