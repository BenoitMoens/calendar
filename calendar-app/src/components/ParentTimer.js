import React, { Component } from 'react';
import Countdown from './Countdown.js';
import './ParentTimer.css';


class ParentTimer extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="timer">
        <h3 className="title">Christmas Eve is coming soon</h3>
        <Countdown date={`${year}-12-24T00:00:00`} />
      </div>
    );
  }
}
export default ParentTimer;