import React from 'react';
import { Container, Button, Row, Col, Jumbotron, Card, CardBody, Form, FormGroup, Label, Input, CardHeader, CardTitle } from 'reactstrap';
import { connect } from "react-redux";
import { createProduct } from "../../store/actions/productAction";


class ProductAdd extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item : {
                name : "Tes",
                description : "Tes description",
                basePrice : 1,
                stock : 1,
            }
        }
    }

    componentDidMount() {
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }
    
    handleCreateProduct = () => {
        this.props.createProduct(this.state.item);
        // this.setState({ item : {
        //     name : "",
        //     description : "",
        //     basePrice : "",
        //     stock : "",
        // } });
    };

    render(){
        return (
            <React.Fragment>
                    <Jumbotron>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h3 className="text-center" >
                                        Create Product
                                    </h3>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                    <FormGroup >
                                        <Label for="name">name</Label>
                                        <Input 
                                            type="text" name="name" id="name"
                                            value={this.state.item.name}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <FormGroup >
                                        <Label for="description">Description</Label>
                                        <Input 
                                            type="text" name="description" id="description"
                                            value={this.state.item.description}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <FormGroup >
                                        <Label for="basePrice">Base Price</Label>
                                        <Input 
                                            type="number" name="basePrice" id="basePrice"
                                            value={this.state.item.basePrice}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <FormGroup >
                                        <Label for="number">Stock</Label>
                                        <Input 
                                            type="text" name="stock" id="stock"
                                            value={this.state.item.stock}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <Button 
                                        className="text-center" size="sm" color="success"
                                        onClick={this.handleCreateProduct}
                                    >Save</Button>
                            </CardBody>
                        </Card>
                    </Jumbotron>
            </React.Fragment>
        )
    }
}

export default connect(null, {createProduct})(ProductAdd);
