import React from 'react'
import PropTypes from 'prop-types'

function Movie({ id, year, title, summary, poster }) {
  return (
    <div>
      <img alt={title} src={poster} />
      <p>
        {title} ({year})
      </p>
      <p>{summary}</p>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}

export default Movie
