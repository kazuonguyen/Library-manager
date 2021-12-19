import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Trang chủ',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Sách giáo khoa',
        path: '/sgk',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Truyện tranh',
        path: '/truyentranh',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Khoa học',
        path: '/khoahoc',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Thông báo',
    path: '/reports',
    icon: <RiIcons.RiNotificationBadgeFill />,
    

    
  },
  {
    title: 'Tất cả người mượn',
    path: '/products',
    icon: <BsIcons.BsFillPeopleFill />
  }
];