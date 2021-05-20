import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SidebarLink = styled(Link)`
    display: flex;
    color: #243085;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 70px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #d3d5da8f;
        border-left: 4px solid #243085;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const SubMenu = (item: any) => {
    item = item.item;
    return (
        <>
            <SidebarLink to={item.path} >
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default SubMenu
