import {FaShoppingCart} from 'react -icons/fa';
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";
import React from 'react'
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import { icons } from "react-icons";

const Header = () => {
  return <Navbar bg='dark'variant='dark'style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <a href='/'>shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width: 500}} placeholder = 'search a product' className='m-auto'
            
            />
        </Navbar.Text>
        <Nav>
        <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
    </Container>
  </Navbar>
}

export default Header