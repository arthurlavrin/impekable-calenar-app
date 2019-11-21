import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 1.492%;
  margin-bottom: 32px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  height: 70px;
`;

const HeaderSearchLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 1.492%;
  background-color: #fff;
`;

const SearchImgWrapper = styled.div`
  width: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const HeaderInput = styled.input`
  width: 210px;
  padding: 5px;
  border: none;
  outline: none;
  &::-webkit-input-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #4d4f5c;
  }

  &::-moz-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #4d4f5c;
  }

  &:-ms-input-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #4d4f5c;
  }

  &:-moz-placeholder {
    font-size: 12px;
    line-height: 20px;
    font-style: normal;
    color: #4d4f5c;
  }
`;

const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRightDivider = styled.div`
  width: 1px;
  height: 28px;
  margin: 0 17px;
  background-color: #ebebf2;
`;

const HeaderNav = styled.ul`
  display: flex;
  align-items: center;
`;

const HeaderNavItem = styled.li`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const HeaderNavPic = styled.div`
  width: 16px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin-right: 15px;
  font-size: 13px;
  line-height: 20px;
  color: #4d4f5c;
`;

const UserDropDown = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowWrapper = styled.div`
  margin-right: 10px;
`;

const ImgWrapper = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
`;

export default () => {
  return (
    <Header>
      <HeaderSearchLabel>
        <SearchImgWrapper>
          <img src="images/icon_search.svg" className="header__search-img" alt="search-icon" />
        </SearchImgWrapper>
        <HeaderInput
          type="text"
          className="header__input"
          placeholder="Search transactions, invoices or help"
        />
      </HeaderSearchLabel>

      <HeaderRightWrapper>
        <HeaderNav>
          <HeaderNavItem>
            <HeaderNavPic>
              <img src="images/support-icon.svg" className="header__nav-img" alt="support-icon" />
            </HeaderNavPic>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavPic>
              <img src="images/message-icon.svg" className="header__nav-img" alt="message-icon" />
            </HeaderNavPic>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavPic>
              <img
                src="images/notification-icon.svg"
                className="header__nav-img"
                alt="notification-icon"
              />
            </HeaderNavPic>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderRightDivider />

        <UserWrapper>
          <UserName>John Doe</UserName>
          <UserDropDown>
            <ArrowWrapper>
              <img src="images/user-arrow.svg" className="user__arrow-img" alt="dropdown-arrow" />
            </ArrowWrapper>
            <ImgWrapper>
              <img src="images/avatar.png" className="user__pic-img" alt="avatar" />
            </ImgWrapper>
          </UserDropDown>
        </UserWrapper>
      </HeaderRightWrapper>
    </Header>
  );
};
