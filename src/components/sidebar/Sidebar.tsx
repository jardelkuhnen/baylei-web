import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from './Logo';

const Nav = styled.div`
    background: #ffffff;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    color: #9199a8;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav<SidebarProp>`
    background: #ffffff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${props => (props.sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

interface SidebarProp {
    sidebar: boolean;
}



const SideBar = () => {

    const [sidebar, setStidebar] = useState(false);

    const showSidebar = () => setStidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#9199a8' }}>

        <Nav>
            <NavIcon to="#">
                <Logo onClick={showSidebar}></Logo>
            </NavIcon>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineCloseCircle onClick={showSidebar}></AiIcons.AiOutlineCloseCircle>
                    </NavIcon>
                    
                    {SidebarData.map((item, index) => {
                        return <SubMenu onClick={showSidebar} item={item} key={index}  />      
                    })}
                </SidebarWrap>
            </SidebarNav>
        </Nav>
            </IconContext.Provider>
    )
}

export default SideBar
