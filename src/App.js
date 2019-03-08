import React, { Component } from 'react';
import { Container } from './style';
import GlobalStyle from "./GlobalStyle";
import Intro from './components/Intro';
import Skills from './components/Skills';
import TimeLine from './components/TimeLine';
import Portfolio from './components/Portfolio';
import Self from './components/Self';
import ContactContainer from './components/ContactContainer';
// INTRO
import profile from './assets/cv.png';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Container>
          <Intro
            image={profile}
            name={`Robert`}
            surname={`Diaz Bejar`}
          />
          <Self
            title={'Intro'}
            bg={'#fbfbfb'}
          />
          <TimeLine
            bg={'#f8f8f8'}
            title={'Education'}
          />
          <Skills
            title={'Personal'}
            bg={'#fbfbfb'}
          />
          <Skills
            title={'Skill'}
            bg={'#f8f8f8'}
          />
          <Portfolio
            title={'Portfolio'}
            bg={'#fbfbfb'}
          />
          <ContactContainer
            title={'Contact'}
            bg={'#f8f8f8'}
          />

        </Container>
      </div>
    );
  }
}

export default App;
