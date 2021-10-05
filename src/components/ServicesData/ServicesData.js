import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from "react-rating";
import { useHistory } from 'react-router';
import "./ServicesData.css"



const ServicesData = (props) => {
    const { name, instructor, urlthumb, instructors_Qualifications, description, pricing, rating, paricipant } = props.course

    const history = useHistory()
    const handlContact = () => {
        history.push("/contact")
    }
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
                        <Button onClick={handlContact} variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ServicesData;