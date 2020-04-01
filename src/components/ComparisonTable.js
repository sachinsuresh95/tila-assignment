import React from 'react';
import { connect } from 'react-redux'
import ProductFeatures from './ProductFeatures'
import { bindActionCreators } from 'redux'
import * as compareModeActions from '../redux/actions/compareModeActions'
import './styles/comparisonTable.css'

const ComparisonTable = (props) => {
    function toggleDiffOnly(e) {
        props.actions.toggleCompareMode(e.currentTarget.checked)
    }

    return (
        <div className='product-comparison-table'>
            <table className='table table-borderless'>
                <tbody>
                    <tr>
                        <td className='table-head'>
                            {
                                props.compare.length > 1 && (
                                <div>
                                    <input type='checkbox' className='toggle-diff-only' onChange={toggleDiffOnly} />&nbsp;
                                    show diff only
                                </div>
                                )
                            }
                        </td>
                        {
                            props.compare.map( product => {
                                return (
                                    <td className='table-head' key={product}>
                                        <ProductFeatures product={product} />
                                    </td>
                                )
                            })
                        }
                    </tr>
                    {
                        props.products.featuresList && props.products.featuresList.map( category => (
                            <React.Fragment  key={category.title}>
                                <tr><th>{category.title}</th></tr>
                                { category.features.map( feature => {
                                    if (props.compareMode && feature.properties && !feature.properties.isDifferent){
                                        return null;
                                    } else {
                                        return (<tr key={feature.featureName}>
                                            <td>
                                                {feature.featureName}
                                            </td>
                                            {
                                                props.compare.map( product => (
                                                    <td key={product}>
                                                        {feature.values[product]}
                                                    </td>
                                                ))
                                            }
                                        </tr>)
                                    }
                                    
                                }) }
                            </React.Fragment>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        compare: state.compare,
        compareMode: state.compareMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            toggleCompareMode: bindActionCreators(compareModeActions.toggleCompareMode, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonTable);
