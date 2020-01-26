import React from 'react';
import { connect } from 'react-redux';
import { categoryActions } from '../actions';

class CategoryAdminDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryName: "",
             categoryImage: ""
        }
    }

    componentDidUpdate(prevProps, state) {
        if (prevProps.category.response !== this.props.category.response) {
            if (this.props.category.response = 'success') {
                this.setState({
                    categoryName: "",
                    categoryImage: ""
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

    handleImageChange=(e)=>{
                this.setState({
            categoryImage: e.target.files[0]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { categoryName, categoryImage} = this.state;
        const { dispatch } = this.props;
        const category = { categoryName, categoryImage}
        if (categoryName !== "",   categoryImage!== "") {
           const data = new FormData();
           data.append('image',categoryImage);
           data.append('categoryName', categoryName)
            dispatch(categoryActions.addCategory(data))
        }
        else {
            alert(" one or more fields cannot be empty");
        }
    }
    render() {
        const { category } = this.props;
        let isSuccess, response;
        console.log(this.state.categoryImage)
        if (Object.keys(category.response).length !== 0) {
            isSuccess = category.response.message;
            response = category.response.message;
            console.log(response);
        }
        if (category.response.error !== undefined) {
            response = category.response.error
        }
      return (
            <>
                <br /><br /><br />
                <div className="container">
                    <h3 className="center balck-text">Product Category</h3>
                    <form >
                        {response ? <p>{response}</p> : null}
                        <div className="input-field">
                            <input type="text" name="categoryName" value={this.state.categoryName} onChange={this.handleChange} />
                            <label for="categoryName" style={{ paddingLeft: "10px" }}>Category Name : </label>
                        </div>
                        <div className="input-field">
                            <label for="  categoryImage" style={{ paddingLeft: "10px" }}>Category Image:</label> <br /> <br />
                            <input type="file"  style={{ paddingLeft: "10px" }}  onChange={this.handleImageChange} />
                        </div>
                        <div className="center">
                            <button className=" waves-effect waves-light btn-small btn pink "
                                style={{ marginBottom: "20px" }}
                                onClick={this.handleSubmit}
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(CategoryAdminDashboard);