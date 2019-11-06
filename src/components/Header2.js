import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
class Header extends Component {
  state = {
    isOpen: false
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <Router>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <MDBNavLink to="/" >
              <strong className="white-text">Gift Store</strong>
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active >
                <MDBNavLink to="/" >Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/products">Products</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Shop</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/weddinggift">Wedding</MDBDropdownItem>
                    <MDBDropdownItem href="bdaygift">Birthday</MDBDropdownItem>
                    <MDBDropdownItem href="xmasgift">Christmas</MDBDropdownItem>
                    <MDBDropdownItem href="splgift">Special Occasion</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/cart">Cart</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>

    );
  }
}

export default Header;
