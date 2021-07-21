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
    display: inline;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    color: #9199a8;
    font-size: 2rem;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`;

const SidebarNav = styled.nav<SidebarProp>`
    background: #ffffff;
    border-radius: 50px;
    width: 400px;
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
    padding-top: 150px;
`;

const Aside = styled.aside`
    flex: 0.5;
    
    background: #162694;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 80px;   
`;


interface SidebarProp {
    sidebar: boolean;
}

const SideBar = () => {

    const [sidebar, setStidebar] = useState(false);

    const showSidebar = () => {
        setStidebar(!sidebar)
    };

    return (
        <div>
            <IconContext.Provider value={{ color: '#9199a8' }}>
                <div>

                    <Nav>
                        <NavIcon to="#">
                            <Logo onClick={showSidebar}></Logo>
                        </NavIcon>
                        
                        <SidebarNav sidebar={true}>
                            <Aside></Aside>
                            <SidebarWrap onClick={showSidebar}>
                                {/* <NavIcon to="#">
                                    <AiIcons.AiOutlineCloseCircle onClick={showSidebar}></AiIcons.AiOutlineCloseCircle>
                                </NavIcon> */}

                                {SidebarData.map((item, index) => {
                                    return <SubMenu item={item} key={index} />
                                })}
                            </SidebarWrap>
                        </SidebarNav>
                    </Nav>
                </div>

            </IconContext.Provider>
        </div>
    )
}

export default SideBar
