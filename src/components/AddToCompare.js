import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as compareActions from '../redux/actions/compareActions'

const AddToCompare = (props) => {
    function handleChange(e) {
        if(e.currentTarget.value) { props.actions.addToCompare(e.currentTarget.value)}
    }

    return (
        <div className='add-component'>
            <h4>Add a product</h4>
            <select onChange={handleChange}>
                <option value=''>choose a product</option>
                { props.products.compareSummary && 
                Object.keys(props.products.compareSummary.titles)
                .filter( product => !props.compare.includes(product))
                .map( product => <option key={product} value={product}>{props.products.compareSummary.titles[product].title}</option>) }
            </select>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        compare: state.compare
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: {
        addToCompare: bindActionCreators(compareActions.addToCompare, dispatch)
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddToCompare);
