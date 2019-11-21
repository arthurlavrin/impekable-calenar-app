import React from 'react';
import { connect } from "react-redux"
import Modal from 'react-modal'
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import EventPopup from './components/EventPopup/EventPopup';

Modal.setAppElement('#root');

const Wrapper = styled.div`
    height: 100%;
`;

const MainWrapper = styled.main`
    min-height: 100%;
    margin-left: 260px;
`;

const App = ({popup}) => (
  <Wrapper>
    <Sidebar />
    <MainWrapper>
      <Header />
      <Calendar />
    </MainWrapper>
    <Modal isOpen={popup.status}>
      <EventPopup />
    </Modal>
  </Wrapper>
);

const mapStateToProps = state => ({
    events: state.events,
    popup: state.popup
});

export default connect(mapStateToProps)(App)
