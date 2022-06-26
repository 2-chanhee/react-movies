import React from "react";
import PropTypes from "prop-types"; // 컴포넌트의 prop을 검사해주는 라이브러리

function Movie({ id, yaer, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
