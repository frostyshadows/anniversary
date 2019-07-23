import React, { Component } from 'react';
import moment from 'moment';

class Days extends Component {

  calculateTimeSince = () => {
    
    const starts = moment('2016-08-04 00:00:00');
    const ends = moment();

    return moment.duration(ends.diff(starts));
  };

  render() {
    const timeSince = this.calculateTimeSince()._data;
    return (
      <div className="App" >
        <p> Happy </p>
        <p> {timeSince.years} years, {timeSince.months} months, and {timeSince.days} days </p>
        <p> together, Russell! </p>
      </div>
    );
  }
}

export default Days;