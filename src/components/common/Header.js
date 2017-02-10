import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
import {Navbar, Grid} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar inverse fixedTop>
            <Grid>
                <Navbar.Header>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    {" | "}
                    <Link to="/bros" activeClassName="active">Bros</Link>
                </Navbar.Header>
            </Grid>
        </Navbar>
    )
}

export default Header;