import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";
import "./ServicesData.css"



const ServicesData = (props) => {
    const { name, instructor, urlthumb, instructors_Qualifications, description, pricing, rating, paricipant } = props.course
    return (
        <div>
            <Col>
                <Card className="d-flex">
                    <Card.Img className="img-size" variant="top" src={urlthumb} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className="d-flex justify-content-between">

                            <h6>Instructor: {instructor}</h6>
                            <h6>{instructors_Qualifications}</h6>
                        </div>
                        <h6>Price: $ {pricing}</h6>
                        <div className="d-flex ">
                        {rating}


                        <div style = {{"margin-left": "10px", "margin-right": "10px"}}>

                        <Rating  
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly>

                        </Rating>
                        </div >
                        ({paricipant})
                        </div>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ServicesData;