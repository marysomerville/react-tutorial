//console.log("it's working!!");
import React from "react";
import { render} from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projectTitle: "Project Title",
      homeMounted: true
    };
  }

  onGreet() {
    alert("Hello");
  }

  onChangeLinkName(newName) {
    this.setState({
      projectTitle: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render() {
    let homeCmp = '';
    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={"Mary"}
          initialAge={30}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.projectTitle}
        />
    );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header projectTitle={this.state.projectTitle}/>
          </div>
        </div>
        {homeCmp}
        <div className="row">
          <hr/>
          <div className="col-xs-12">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
        <hr/>
        <footer className="footer well">
          <p>ReactJS tutorial</p>
        </footer>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
