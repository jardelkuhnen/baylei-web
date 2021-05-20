import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [

    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Produtos',
        path: '/produtos',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
    },
    
];

export default SidebarData;