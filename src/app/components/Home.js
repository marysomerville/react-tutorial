import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      projectTitle: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component update", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(nextProps, prevState) {
    console.log("Component did update", prevState, prevState);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.projectTitle);
  }

  onHandleChange(event) {
    this.setState({
      projectTitle: event.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-8">
          <p>My home component!</p>
          <p>Your name is {this.props.name}, your age is {this.state.age}</p>
          <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
          <hr/>
          <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
          <hr/>
          <form className="form-inline">
            <input type="text" className="form-control" value={this.state.projectTitle} onChange={(event) => this.onHandleChange(event)} />
            <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Project Name</button>
          </form>
        </div>
        <div className="col-xs-4">
          <p>Status will update after 3 seconds</p>
          <p>Status: {this.state.status}</p>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};
