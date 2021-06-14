import React from 'react'
import PropTypes from 'prop-types'

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>Rating {rating}.0 / 5.0</h4>
      <img alt={name} src={image} width="300" height="200" />
      <br />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodsThatILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  )
}

const foodsThatILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1200px-Samgyeopsal-gui.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://www.50friendly.com/wp-content/uploads/2020/05/bibimbap-korean-dish.jpg',
    rating: 2,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'http://c1.staticflickr.com/3/2700/4287500563_067042fa38.jpg',
    rating: 1,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2013/09/kimbap.jpg',
    rating: 5,
  },
]

export default App
