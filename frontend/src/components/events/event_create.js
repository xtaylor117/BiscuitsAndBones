import React from 'react';
import EventBox from './event_box';
import './events.css'
import EventMap from '../map/event_map'

class EventCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          description: "",
          location: "",
          time: "",
          newEvent: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newEvent: nextProps.newEvent.description});
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = {
      description: this.state.description,
      location: this.state.location,
      time: this.state.time
    };

    this.props.createEvent(event); 
    this.setState({description: ''})
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
        <div className="create-event-container">
            <form className="create-form" onSubmit={this.handleSubmit}>
                <div>
                    <input className="create-event-input" type="textarea"
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder="Write your event..."
                    />
                    <input type="text"
                        value={this.state.location}
                        onChange={this.update('location')}
                        placeholder="Set location..."
                    />
                    <input type="time"
                        value={this.state.time}
                        onChange={this.update('time')}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <EventBox description={this.state.newEvent} />
            <EventMap />
        </div>
    )
  }
}

export default EventCreate;