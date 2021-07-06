import React from 'react';
import { Table, Button } from 'reactstrap';
import { connect } from "react-redux";
import { deleteProduct, viewProduct } from "../../store/actions/productAction";

const ProductList = ({products, deleteProduct, viewProduct}) => 
    (
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Base Price</th>
                <th>Stock</th>
                <th>Action</th>
                </tr>
            </thead>
            
            <tbody>
                {products && products.length ? 
                    products.map( (product, key) => {
                        return ( 
                            <tr key={key}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.basePrice}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Button 
                                        size="sm" color="primary"
                                        onClick={()=> viewProduct(product) }
                                    >Detail</Button>
                                    <Button 
                                        size="sm" color="danger"
                                        onClick={()=> deleteProduct(product.id) }
                                    >Delete</Button>
                                </td>
                            </tr>
                            );
                    })
                    : ""
                }
            </tbody>
        </Table>
    )

const mapStateToProps = state => {
    return { 
        products : state.product.products,
        product : state.product.product
    }
}
const mapDispatchToProps = {
    viewProduct : viewProduct,
    deleteProduct : deleteProduct
}
export default connect(mapStateToProps, mapDispatchToProps )(ProductList);
