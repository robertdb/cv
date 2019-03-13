import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo,
    Title,
    WrapperProgressBar
} from './style';
import "react-step-progress-bar/styles.css";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import timeline from './timeline.css';

class TimeLine extends Component {
    render() {
        return (
            <WrapperProgressBar>
                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="001"
                        dateText=" 08/2018 – 01/2019 "
                        style={{ color: '#F8BB10' }}
                        dateInnerStyle={{ background: '#F8BB10', color: '#000' }}
                    >
                        <h3>PROSEGUR</h3>
                        <p>
                            Operador de monitoreo: Monitoreo 24hs. Permite el acceso únicamente a personas autorizadas. Alertas en caso de situaciones inusuales.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="04/2018 – 11/2010"
                        style={{ color: '#F8BB10' }}
                        dateInnerStyle={{ background: '#F8BB10', color: '#000' }}

                    >
                        <h3 style={{ color: '#61b8ff' }}>HAVANNA</h3>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                                </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                                </p>
                    </TimelineItem>

                    <TimelineItem
                        key="004"
                        dateText="08/2008 – 11/2008"
                        style={{ color: '#F8BB10' }}
                        dateInnerStyle={{ background: '#F8BB10', color: '#000' }}
                    >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                      </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                      </p>
                    </TimelineItem>
                </Timeline>
            </WrapperProgressBar>
        );
    }
}

export default TimeLine;