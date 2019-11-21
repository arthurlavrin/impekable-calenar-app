import React from 'react';
import {
  faHome,
  faChartBar,
  faEnvelope,
  faFlag,
  faReceipt,
  faUsers,
  faComments,
  faCalendarAlt,
  faLifeRing,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MENU_ITEMS = [
  {
    name: 'Home',
    icon: faHome,
  },
  {
    name: 'Dashboard',
    icon: faChartBar,
  },
  {
    name: 'Inbox',
    icon: faEnvelope,
  },
  {
    name: 'Products',
    icon: faFlag,
  },
  {
    name: 'Invoices',
    icon: faReceipt,
  },
  {
    name: 'Customers',
    icon: faUsers,
  },
  {
    name: 'Chat Room',
    icon: faComments,
  },
  {
    name: 'Calendar',
    icon: faCalendarAlt,
  },
  {
    name: 'Help Center',
    icon: faLifeRing,
  },
  {
    name: 'Settings',
    icon: faCog,
  },
];

const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 260px;
  height: 100%;
  background-color: #43425d;
`;

const SidebarHeader = styled.div`
  padding: 26px 7.692% 25px;
  background-color: #3c3b53;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.04);
`;

const SidebarTitle = styled.h2`
  font-size: 15px;
  line-height: 21px;
  color: #fff;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  padding: 17px 3.846% 17px 9.615%;
  color: #a5a4bf;
`;

const LinkName = styled.span`
  margin-left: 15px;
  font-size: 15px;
  line-height: 19px;
  color: #fff;
  transition: 0.2s;
`;

const SidebarItem = styled.li`
  &:hover {
    background-color: #3c3b54;
    ${LinkName},
    .svg-inline--fa {
      opacity: 0.6;
    }
  }
`;

export default () => (
  <Sidebar>
    <SidebarHeader>
      <SidebarTitle>impekable</SidebarTitle>
    </SidebarHeader>

    <ul>
      {MENU_ITEMS.map((item, index) => {
        return (
          <SidebarItem key={index}>
            <SidebarLink href="#">
              <FontAwesomeIcon icon={item.icon} />
              <LinkName>{item.name}</LinkName>
            </SidebarLink>
          </SidebarItem>
        );
      })}
    </ul>
  </Sidebar>
);
