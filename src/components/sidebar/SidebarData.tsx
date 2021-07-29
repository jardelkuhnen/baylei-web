import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';


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
        path: '/produtos',
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