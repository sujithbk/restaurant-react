import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Window() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
  
    let fetchRestaurant = async () => {
      let data = await fetch('./restaurants.json')
                  .then((res) => res.json())
                  .catch((err) => console.log(err));
                     
      
                  setRestaurants(data.restaurants);

    }
    
    fetchRestaurant();

  }, []);

  console.log(restaurants)
  
  return (
    <Container>
      <Row>
       {
          
          restaurants && restaurants.map((restaurant) => (

            <Col className='mt-3' md={3} key={restaurant.id}>
            <Card >
          <Card.Img variant="top" src={`${restaurant.photograph}`} />
          <Card.Body>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Text>
             <br/> <strong>Cuisine :</strong> { restaurant.cuisine_type}
              <br/><strong>Address :</strong> {restaurant.address}
            </Card.Text>
            <Button as={Link}to={`/restaurant/${restaurant.id}`} variant="primary" >Go somewhere</Button>
          </Card.Body>
        </Card>
            </Col>

          ))
       
       }
      </Row>
    </Container>
  )
}

export default Window