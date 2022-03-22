import React from "react";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data"



const ListData = ({}) => {
    return (
        <div className="main mt-4">
            <Container fluid className="p-3">
                <Row>
                    {
                        data.map((item, index) => {
                            return (
                                <Col key={index} className="p-5" xl={4} md={6}>
                                    <Card card={item} number={index}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default ListData