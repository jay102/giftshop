import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { productsActions, categoryActions } from '../actions';
import CheckBox from './checkbox';

class ProductAdminDashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: "",
            productPrice: "",
            productDesc: "",
            productCoupon: "",
            productPromo: "",
            productImage: "",
            categoryId: ""
        }
    }
    componentDidMount() {

        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        const { dispatch } = this.props;
        dispatch(categoryActions.fetchCategory())
    }
    componentDidUpdate(prevProps, state) {

        if (prevProps.product.response !== this.props.product.response) {
            if (this.props.product.response = 'success') {
                this.setState({
                    productName: "",
                    productPrice: "",
                    productDesc: "",
                    productCoupon: "",
                    productPromo: "",
                    productImage: "",
                    categoryId: "",
                    checked: ''
                })
            }

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleImageChange = (e) => {
        this.setState({
            productImage: e.target.files[0]
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { productName, productPrice, productDesc, productCoupon, productPromo, productImage, categoryId } = this.state;
        const { dispatch } = this.props;
        const product = { productName, productPrice, productDesc, productCoupon, productPromo, productImage, categoryId }
        if (productName !== "", productPrice !== "", productDesc !== "", productCoupon !== "", productPromo !== "", productImage !== "", categoryId !== "") {
            dispatch(productsActions.addProduct(product))
        }
        else {
            alert(" one or more fields cannot be empty");
        }
    }

    handleSelect = (e, id) => {
        const { name, checked } = e.target
        if (checked) {
            this.setState({ categoryId: id })
        }
    }

      render() {
        const { product } = this.props;
        const { category } = this.props;
        console.log(category)
        console.log(this.state.categoryId);
        //console.log(this.handleSelect())
        let isSuccess, response;
        if (Object.keys(product.response).length !== 0 && Object.keys(category.response).length !== 0) {
            isSuccess = product.response.message;
            response = product.response.message;
        }
        //console.log(response)
        //console.log(responseCategory)
        if (product.response.error !== undefined) {
            response = product.response.error;
            //responseCategory= category.response.error
        }
        return (
            <>
                <br /><br /><br />
                <div className="container" style={{ border: "2px solid #AD1457", marginTop: "20px", marginBottom: "20px" }}>
                    <h3 className="center balck-text">Add Product Detail</h3>
                    {response ? <p style={{ color: "red" }}>{response}</p> : null}
                    <form>
                        <div>
                            <div className="input-field">
                                <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange} />
                                <label for="productName" style={{ paddingLeft: "10px" }}>Name : </label>
                            </div>
                            <div className="input-field">
                                <input type="text" name="productPrice" value={this.state.productPrice} onChange={this.handleChange} />
                                <label for="productName" style={{ paddingLeft: "10px" }}>Price : </label>
                            </div>
                            <div className="input-field">
                                <input type="text" name="productDesc" value={this.state.productDesc} onChange={this.handleChange} />
                                <label for="productDesc" style={{ paddingLeft: "10px" }}>Description : </label>
                            </div>
                            <div className="input-field">
                                <input type="text" name="productCoupon" value={this.state.productCoupon} onChange={this.handleChange} />
                                <label for="productCoupon" style={{ paddingLeft: "10px" }}>Coupon : </label>
                            </div>
                            <div className="input-field">
                                <input type="text" name="productPromo" value={this.state.productPromo} onChange={this.handleChange} />
                                <label for="productPromo" style={{ paddingLeft: "10px" }}>Promo : </label>
                            </div>
                            <div className="input-field">
                                {category.category.map(category =>{
                                   return  <CheckBox id={category.categoryId} name="categoryId" title={category.categoryName} handleChange= {this.handleSelect} />
                                }

                                )}
                            </div>
                            
                            <div className="input-field">
                                <label for="productImage" style={{ paddingLeft: "10px" }}>Image :</label> <br /> <br />
                                <input type="file" name="productImage" style={{ paddingLeft: "10px" }} onChange={this.handleImageChange}  />
                            </div>


                            <div className="center" style={{ marginTop: "20px" }}>
                                <button className=" waves-effect waves-light btn-small btn pink "
                                    style={{ marginBottom: "20px" }}
                                    onClick={this.handleSubmit}
                                    type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product,
        category: state.category
    }
}

export default connect(mapStateToProps)(ProductAdminDashBoard)