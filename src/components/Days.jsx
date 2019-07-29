import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';

class Days extends Component {

  calculateTimeSince = () => {
    
    const starts = moment('2016-08-04 00:00:00');
    const ends = moment();

    return moment.duration(ends.diff(starts));
  };

  render() {
    const timeSince = this.calculateTimeSince()._data;
    return (
      <div className="Days" >
        <p className="happyText"> Happy </p>
        <p className="timeText"> {timeSince.years} years, {timeSince.months} months, and {timeSince.days} days </p>
        <p className="russellText">Russell! </p>
      </div>
    );
  }
}

export default Days;