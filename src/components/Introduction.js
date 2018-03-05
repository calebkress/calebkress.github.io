import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="about">
        <div className="introduction">
          <h3><p>I'm a lifelong linguist turned full-stack software engineer living in Austin, TX.</p><p> I build Javascript applications across multiple platforms.</p></h3>
        </div>
        <div className="intro-photo">
          <img src="https://i.imgur.com/AM9gCxD.jpg" height="470" width="313" align="right"></img>
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
