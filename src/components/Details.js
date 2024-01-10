import React, { useEffect, useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Details() {

  const{id} = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
  
    let fetchRestaurant = async () => {
      let data = await fetch('/restaurants.json')
                  .then((res) => res.json())
                  .catch((err) => console.log(err));
                     
      
                  setRestaurants(data.restaurants);

    }
    
    fetchRestaurant();

  }, []);

 let findRestaurant = restaurants.find((item) => item.id == id)

  return (
     
 <>
{
  
findRestaurant &&

<Card >
    <Card.Img  variant="top" src= {`${findRestaurant.photograph}`} style={{height:500, width:500}}/>
     <Carousel.Caption>
        <Card.Title>{findRestaurant.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
        </Carousel.Caption>
    <Card.Body>
     
      
    </Card.Body>
   

  
  </Card>



}
 </>
   
  )
}

export default Details