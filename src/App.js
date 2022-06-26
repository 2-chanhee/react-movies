import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // component가 mount되면 바로 실행
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
