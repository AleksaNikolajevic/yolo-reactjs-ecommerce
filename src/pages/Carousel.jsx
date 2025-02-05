import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/wu38duO7lcEY0BCo6qTkwcrOx5oFwFNLHRYud6POTb-URmZ2jlXHLq5PAUFGCUcVew7zCK-C4aNKuMSF-SQxU-5Vu4fjM_E2WWp-S_Y=rw-e365-w2880"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

export default Carousel
