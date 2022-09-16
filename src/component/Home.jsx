import React from "react";
import Image from "../assets/back.jpg";
import Card from "react-bootstrap/Card";


export default function Home() {
  return (

    <div className="Card-container">
      <Card style={{ width: "80rem"}}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Product</Card.Title>
      <hr></hr>
        </Card.Body>
      </Card>
      </div>
  
  );
}
