import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo,
    Title,
    WrapperProgressBar,
    TitleProject,
    Block,
    Line,
    Wrapper,
    SliderWrap,
    Description
} from './style';
import style from './styles.css';
import Slideshow from 'react-slidez'
import Carousel from 'nuka-carousel';
import rimula1 from '../../assets/rimula_1.png';
import rimula2 from '../../assets/rimula_2.png';
import rimula3 from '../../assets/rimula_3.png';
import helix_1 from '../../assets/helix_1.png';

import OnScrollAnimation from '../OnScrollAnimation';


class SimpleSlider extends React.Component {
    state = {
        slideIndex: 0
    };
    render() {
        const images = [rimula1, rimula2, rimula3]
        return (
            <Carousel
                slideIndex={this.state.slideIndex}
                afterSlide={slideIndex => this.setState({ slideIndex })}
            >
                {images.map((item, index) => {
                    return (
                        <img key={index} src={item} style={{ maxWidth: 200, margin: '0 auto' }} />
                    )
                })
                }
            </Carousel>
        );
    }
}


class Portfolio extends Component {
    render() {
        const { title, bg } = this.props;
        return (
            <Container>
                <WrapperOne bg={bg}>
                    <Title>{title}</Title>
                </WrapperOne>
                <WrapperTwo>
                    <WrapperProgressBar>
                        <Wrapper>
                            <Block>
                                <OnScrollAnimation>
                                    <Line />
                                    <TitleProject>React</TitleProject>
                                    <Description>
                                        {`Proyecto compilado con Cordova con código escrito en React.js. La app consta de la versión de Android y IOS. Como librerías más destacadas se puede hacer una mensión en Redux, Sass, Plugin de Cordova para levantar un Mapa Nativo.`}
                                    </Description>
                                </OnScrollAnimation>

                            </Block>
                            {window.screen.width > 946 ?
                                <SliderWrap>
                                    <Slideshow
                                        showArrows
                                        autoplay={false}
                                        enableKeyboard
                                        useDotIndex
                                        slideInterval={2000}
                                        defaultIndex={1}
                                        slides={[rimula1, rimula2, rimula3]}
                                        effect={'fade'}
                                        height={'420px'}
                                        width={'230px'}
                                    />
                                </SliderWrap>
                                :
                                <div style={{ marginTop: 20 }}>
                                    <SimpleSlider />
                                </div>



                            }

                        </Wrapper>
                    </WrapperProgressBar>
                    <WrapperProgressBar>
                        <Wrapper>
                            <Block>
                                <OnScrollAnimation>
                                    <Line />
                                    <TitleProject>Cordova</TitleProject>
                                    <Description>
                                        {`Proyecto compilado con Cordova con código escrito en React.js. La app consta de la versión de Android y IOS. Como librerías más destacadas se puede hacer una mensión en Redux, Sass, Plugin de Cordova para levantar un Mapa Nativo.`}
                                    </Description>
                                </OnScrollAnimation>

                            </Block>
                            {window.screen.width > 946 ?
                                <SliderWrap>
                                    <Slideshow
                                        showArrows
                                        autoplay={false}
                                        enableKeyboard
                                        useDotIndex
                                        slideInterval={2000}
                                        defaultIndex={1}
                                        slides={[rimula1, helix_1, rimula3]}
                                        effect={'fade'}
                                        height={'420px'}
                                        width={'230px'}
                                    />
                                </SliderWrap>
                                :
                                <div style={{ marginTop: 20 }}>
                                    <SimpleSlider />
                                </div>



                            }

                        </Wrapper>
                    </WrapperProgressBar>

                </WrapperTwo>
            </Container>
        );
    }
}

export default Portfolio;