import React from 'react';
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions/productAction";
import { Jumbotron, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

const ProductDetail = ({product}) => 
    (
        
        <Jumbotron>
        <Card>
            <CardHeader>
                <CardTitle>
                    <h3 className="text-center" >
                        Detail Product
                    </h3>
                </CardTitle>
            </CardHeader>
            <CardBody>
                {
                    <div>
                        <p>
                            Name : { product ? product.name : ""}
                        </p>
                        <p>
                            Description : { product ? product.description : ""}
                        </p>
                        <p>
                            Base Price : {product ? product.basePrice : "" }
                        </p>
                        <p>
                            Stock : {product ? product.stock : "" }
                        </p>
                    </div>
                }
            </CardBody>
        </Card>
    </Jumbotron>
    )

const mapStateToProps = state => {
    return { product : state.product.product }
}

export default connect(mapStateToProps, { deleteProduct })(ProductDetail);
