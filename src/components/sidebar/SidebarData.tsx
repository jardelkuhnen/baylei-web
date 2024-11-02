import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Venda',
        path: '/order',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Produto',
        path: '/product',
        icon: <AiIcons.AiFillAppstore />,
    },
    {
        title: 'Plano',
        path: '/plan',
        icon: <AiIcons.AiFillAccountBook />,
    },
    {
        title: 'Cliente',
        path: '/client',
        icon: <AiIcons.AiOutlineUserAdd />
    },
    {
        title: 'Vendedor',
        path: '/seller',
        icon: <AiIcons.AiOutlineUserAdd />,
    },
    
];

export default SidebarData;