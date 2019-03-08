import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import ScrollTrigger from "react-scroll-trigger";

import { Base } from "./style";

class OnScrollAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationPlayed: false
    };

    this.nodeRef = null;
  }

  onEnterViewport() {
    const { notAnimated } = this.props;
    // Abort early...
    if (this.state.animationPlayed) return;

    this.playAnimation();

    if (typeof this.props.onEnterExec === "function") this.props.onEnterExec();
  }

  playAnimation() {
    this.setState({ animationPlayed: true });

    anime({
      targets: this.nodeRef.childNodes,
      translateY: this.props.translateY,
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: this.props.duration,
      delay: this.props.delay
    });
  }

  render() {
    return (
      <ScrollTrigger onEnter={this.onEnterViewport.bind(this)}>
        <Base
          ref={node => {
            this.nodeRef = node;
          }}
          disablePointerEvents={this.props.disablePointerEvents}
        >
          {this.props.children}
        </Base>
      </ScrollTrigger>
    );
  }
}

OnScrollAnimation.defaultProps = {
  disablePointerEvents: false,
  translateY: [20, 0],
  duration: 1000,
  delay: (e, i) => i * 300
};

OnScrollAnimation.propTypes = {
  disablePointerEvents: PropTypes.bool.isRequired,
  translateY: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
  delay: PropTypes.any,
  onEnterExec: PropTypes.func
};

export default OnScrollAnimation;
