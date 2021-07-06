import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import ProductList from "./ProductList";
import ProductAdd from "./ProductAdd";
import ProductDetail from "./ProductDetail";

class ProductPage extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <ProductAdd/>
                        </Col>
                        <Col>
                            <ProductDetail/>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <ProductList/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}


export default connect()(ProductPage);
