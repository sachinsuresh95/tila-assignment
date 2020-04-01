import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../redux/actions/productActions'
import ComparisonTable from './ComparisonTable';
import AddToCompare from './AddToCompare';

import './styles/app.css'

class App extends React.Component {
    componentDidMount() {
        this.props.actions.loadProducts();
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3>Compare</h3>
                <p>{this.props.compare.length} item(s) selected</p>
                <div className='product-section'>
                    <ComparisonTable />
                    {this.props.compare.length < 4 && <AddToCompare/>}
                </div>
            </div>
        )
    }
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
        loadProducts: bindActionCreators(productActions.loadProducts, dispatch)
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  