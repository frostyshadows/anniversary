import React, {Component} from 'react';
import '../styles/App.css';
const images = require.context('../images', true);

class GithubLink  extends Component {
  openRepo = () => {
    window.open("https://github.com/frostyshadows/anniversary", "_blank");
  }

  render() {

    return (
      <img
        className="githubLogo"
        src={images(`./github_logo.png`)} alt="Github"
        onClick={this.openRepo}
      />
    );
  }
}

export default GithubLink;