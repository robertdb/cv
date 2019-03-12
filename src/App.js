import React, { Component } from 'react';
import { Container } from './style';
import GlobalStyle from "./GlobalStyle";
import Intro from './components/Intro';
import Skills from './components/Skills';
import TimeLine from './components/TimeLine';
import Portfolio from './components/Portfolio';
import Self from './components/Self';
import ContactContainer from './components/ContactContainer';


import DualComponent from './components/DualComponent';
import { data } from './helper';
class App extends Component {
  render() {
    const {
      name,
      surname,
      imageProfile,
      career
    } = data.profile
    return (
      <div>
        <GlobalStyle />
        <Container>
          <Intro
            image={imageProfile}
            name={name}
            surname={surname}
            contact={data.contact}
            career={career}
          />

          <DualComponent
            title={'Intro'}
            bg={'#f8f8f8'}
          >
            <Self
              description={data.intro.description}
            />
          </DualComponent>
          <DualComponent
            title={'Education'}
            bg={'#f8f8f8'}
          >
            <TimeLine />
          </DualComponent>
          <DualComponent
            title={'Personal'}
            bg={'#f8f8f8'}
          >
            <Skills
              data={data.Skills}
            />
          </DualComponent>
          <DualComponent
            title={'Skill'}
            bg={'#f8f8f8'}
          >
            <Skills
              data={data.Personal}
            />
          </DualComponent>
          <Portfolio
            title={'Portfolio'}
            bg={'#fbfbfb'}
          />

          <DualComponent
            title={'Contact'}
            bg={'#f8f8f8'}
          >
            <ContactContainer
              contact={data.contact}
            />
          </DualComponent>

        </Container>
      </div>
    );
  }
}

export default App;
