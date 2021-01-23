import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import logo from '../../img/gobz-logo.png';

class AppHead extends Component {
    render() {
        return (
            <MetaTags>
            <title>{this.props?.title ?? "Gobz"}</title>
            
            <meta name="description" content="Gobz application is a project manager tool." />
            <meta property="og:title" content="Gobz" />
            <meta property="og:image" content={logo} />
            </MetaTags>
          )
      }
}

export default AppHead;