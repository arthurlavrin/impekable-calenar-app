import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import { connect } from 'react-redux';
import styled from 'styled-components';
import { eventAdd, eventChange, eventRemove } from '../../store/actions/event';
import { popupOpen, popupClose } from '../../store/actions/popup';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

const CalendarWrapper = styled.div`
  width: 90%;
  background: white;
  margin: auto;
  padding-top: 65px;
  margin-bottom: 50px;
`;

const InnerWrapper = styled.div`
    height: 90%
    width: 90%
    margin: auto
`;

const CalendarTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 18px;
  color: #4d4f5c;
  margin-left: 50px;
`;

class Calendar extends Component {
  calendar = React.createRef();

  componentDidUpdate() {
    const events = this.calendar.current.getApi().getEvents();
    events.map(event => event.remove());

    this.props.events.map(event => this.calendar.current.getApi().addEvent(event));
  }

  eventClick = info => {
    const modalParams = {
      status: true,
      title: info.event.title,
      start: info.event.start.toISOString(),
      end: info.event.end.toISOString(),
      id: info.event.id,
      x: info.jsEvent.x,
      y: info.jsEvent.y,
    };

    this.props.popupOpen(modalParams);
  };

  eventDrop = info => {
    this.props.eventChange(info.event);
  };

  select = info => {
    const modalParams = {
      status: true,
      start: info.start.toISOString(),
      end: info.end.toISOString(),
      x: info.jsEvent.x,
      y: info.jsEvent.y,
    };
    this.props.popupOpen(modalParams);
  };

  render() {
    return (
      <CalendarWrapper>
        <CalendarTitle>Calendar View</CalendarTitle>
        <InnerWrapper>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendar}
            events={this.props.events}
            id="calendar"
            height="parent"
            buttonText={{
              today: 'Today',
              month: 'Month',
              week: 'Week',
              day: 'Day',
              list: 'List',
              prev: 'Back',
              next: 'Next',
            }}
            timeZone="UTC"
            eventDurationEditable={false}
            themeSystem="bootstrap"
            editable="true"
            selectable="true"
            eventClick={this.eventClick}
            select={this.select}
            eventDrop={this.eventDrop}
          />
        </InnerWrapper>
      </CalendarWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventAdd: event => dispatch(eventAdd(event)),
  eventRemove: event => dispatch(eventRemove(event)),
  eventChange: event => dispatch(eventChange(event)),
  popupOpen: modalParams => dispatch(popupOpen(modalParams)),
  popupClose: () => dispatch(popupClose(false)),
});

const mapStateToProps = state => ({
  popup: state.popup,
  events: state.events,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
