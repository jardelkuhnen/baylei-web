import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from './Logo';
import { Avatar, makeStyles } from '@material-ui/core';

const Nav = styled.div`
    background: #ffffff;
    height: 80px;
    display: inline;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 10%;
    color: #9199a8;
    margin-top: 2px;
    display: flex;
    align-items: center;
`;

const Header = styled.div`
    background: #fff;
    
    height: 130px;
    width: 100%;
    
    align-items: center;
    padding-right: 30px;

    display: flex;
    justify-content: flex-end;
`;

const SidebarNav = styled.nav<SidebarProp>`
    background: #fbfbfb;
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
    padding-top: 30px;
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
}));


interface SidebarProp {
    sidebar: boolean;
}

const SideBar = () => {

    const classes = useStyles();

    const [sidebar, setStidebar] = useState(false);

    const showSidebar = () => {
        setStidebar(!sidebar)
    };

    return (
        <div>
            <IconContext.Provider value={{ color: '#9199a8' }}>
                <Nav>
                    <Header>
                        <div>
                            <Avatar alt="Remy Sharp" src="/static/avatar/person.png" className={classes.large} />
                            <h4>Olá Adriel</h4>
                        </div>
                    </Header>

                    <SidebarNav sidebar={true}>

                        <Aside></Aside>

                        <SidebarWrap onClick={showSidebar}>
                            <NavIcon to="#">
                                <Logo onClick={showSidebar}></Logo>
                            </NavIcon>

                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />
                            })}
                        </SidebarWrap>
                    </SidebarNav>
                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default SideBar
