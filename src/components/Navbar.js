import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <Div>
        <Nav>
            <h1>Blog Site</h1>
            <UL>
                <li>
                    <NavLink activeClassName="active" exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/create">
                        New Blog
                    </NavLink>
                </li>
            </UL>
        </Nav>
    </Div>
);

export default Navbar;

const Div = styled.div`
    margin: 1.5em auto 5em;
    h1 {
        display: inline-block;
        color: #f1356d;
        font-size: 2.2em;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UL = styled.ul`
    list-style-type: none;
    display: flex;
    a {
        padding: 0.5em;
        margin: auto 0.5em;
        color: #333;
        text-decoration: none;
        transition: all 0.2s linear;
        &:hover:not(.active) {
            color: red;
        }
    }
    .active {
        font-weight: bold;
        color: red;
        border-bottom: 2px solid red;
        border-radius: 1px;
    }
`;
