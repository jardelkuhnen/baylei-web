import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [
    {
        title: 'Category',
        path: '/category',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        // subNav: [
        //     {
        //         title: 'Users',
        //         path: '/users',
        //         icon: <IoIcons.IoIosPaper />
        //     },
        //     {
        //         title: 'Revenue',
        //         path: '/overwiew/revenue',
        //         icon: <IoIcons.IoIosPaper />
        //     },
        // ]
    },
    {
        title: 'Prodcuts',
        path: '/products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    
];

export default SidebarData;