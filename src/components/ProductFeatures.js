import React from 'react';
import {connect} from 'react-redux';

import './styles/productFeatures.css'
import { bindActionCreators } from 'redux';
import * as compareActions from '../redux/actions/compareActions';

const ProductFeatures = (props) => {
    function removeProduct(e) {
        props.actions.removeProduct(e.currentTarget.dataset.product)
    }
    return (
        <div className='product-features'>
            <span className='remove-product' data-product={props.product} onClick={removeProduct}>X</span>
            <img src={props.images[props.product]} alt="" />
            <div>{props.titles[props.product].title}</div>
            <div>
                <strong>INR {props.prices[props.product].finalPrice}</strong>&nbsp;
                <strike>INR {props.prices[props.product].price}</strike>&nbsp;
                {props.prices[props.product].totalDiscount}% off    
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    images: state.products.compareSummary.images,
    prices: state.products.compareSummary.productPricingSummary,
    titles: state.products.compareSummary.titles
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            removeProduct: bindActionCreators(compareActions.removeProduct, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFeatures);
