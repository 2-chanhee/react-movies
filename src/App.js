import React from "react";
import axios from "axios";

import Movie from "./movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  };

  // component가 mount되면 바로 실행
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((m) => (
              <Movie
                key={m.id} // key 없으면 react-jsx-dev-runtime.development.js:97 Warning: Each child in a list should have a unique "key" prop.
                id={m.id}
                year={m.year}
                title={m.title}
                summary={m.summary}
                poster={m.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
