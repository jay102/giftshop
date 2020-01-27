import React from 'react';
import { Link } from 'react-router-dom';
import bday from '../img/bday.jpg';
import xmas from '../img/xmas.jpg';
import anniversary from '../img/anniversary.jpg';
import forhim from '../img/forhim.jpg';
import forher from '../img/forher.jpg';
import homegarden from '../img/homegarden.jpg';
import { connect } from 'react-redux';
import { categoryActions } from '../actions';

class ProductCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(categoryActions.fetchCategory());
    }
    render() {
        const { category } = this.props;
        console.log(category);
        let isSuccess, response;
        if (Object.keys(category.response).length !== 0 && Object.keys(category.response).length !== 0) {
            response = category.response.message;
        }
        //console.log(response)
        //console.log(responseCategory)
        if (category.response.error !== undefined) {
            response = category.response.error;
            //responseCategory= category.response.error
        }

        return (
            <div >
                <br /><br /><br />
                <div>
                    <div className="col s4">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            {category.category ? category.category.map(cat => (
                                <div>
                                    <Link to="/products"  ><img src={cat.categoryImage} className="responsive-img" /></Link>
                                    <p>{cat.categoryName}</p>
                                </div>
                            )) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        category: state.category
    }

}
export default connect(mapStateToProps)(ProductCategory);




        //         <div className="col s4">
        //             <Link to ="/products "><img src={anniversary} className="responsive-img " /></Link>
        //             <p>Anniversary Gift</p>
        //         </div>
        //         <div className="col s4">
        //             <Link to = "/products"><img src={xmas} className="responsive-img " /></Link>
        //             <p>Christmas Gift</p>
        //         </div>
        //     </div>

        //     <div className="row">
        //         <div className="col s4">
        //             <Link to = "/products" ><img src={forhim}  className="responsive-img " /></Link>
        //             <p>Gift for him</p>
        //         </div>
        //         <div className="col s4">
        //             <Link to = "/products" ><img src={forher} className="responsive-img " /></Link>
        //             <p>Gift for her</p>
        //         </div>
        //         <div className="col s4">
        //             <Link to = "/products" ><img src={homegarden} className="responsive-img " /></Link>
        //             <p>Home & Garden</p>
        //         </div>

        // </div>

