import React, { Component } from 'react';

class MyClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic for form submission
    console.log('Form submitted with state:', this.state);
    // You can also call a function passed from parent component as a prop
 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="className">Class Name:</label>
            <input
              type="text"
              id="className"
              name="className"
              value={this.state.className}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="startTime">Start Time:</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={this.state.startTime}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endTime">End Time:</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={this.state.endTime}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" style={{ padding: '10px', backgroundColor: 'brown', color: 'white', border: 'none', borderRadius: '16px', cursor: 'pointer', fontSize: 'x-large' }}>Create Class</button>
        </form>
      </div>
    );
  }
}

export default MyClassForm;
