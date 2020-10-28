import { connect } from 'react-redux';
import { fetchEvents, deleteEvent, receiveEvent } from '../../actions/event_actions';
import Events from './events';

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);