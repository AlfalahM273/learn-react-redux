import React from 'react';
import ProductPage from './product/ProductPage';

class MainPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ProductPage/>
        )
    }
}

export default MainPage
