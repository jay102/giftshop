import React from 'react';
import { connect } from 'react-redux';
import { showPdtDesc } from '../actions';

class ProductDetail extends React.Component {

    showProduct(id) {
        let product = " ";
        this.props.product.filter((pdt) => {
            if (pdt.id === id)
                product = pdt
            return product
            console.log(product)
        })
    }
    render() {
        const product = this.props.product
        console.log(product)
        return (
            <div className="row">
                <br /><br /><br />
                <div className="col s4">
                    <div className="card-panel">
                        <h2 >test</h2>
                        {this.showProduct(product.name)}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps)(ProductDetail);

