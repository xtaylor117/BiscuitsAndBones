import { connect } from 'react-redux';
import { fetchEvents, deleteEvent, updateEvent } from '../../actions/event_actions';
import Events from './events';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    updateEvent: (event) => dispatch(updateEvent(event)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);