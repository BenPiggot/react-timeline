import * as React from 'react';

interface Timeline {
  minDate: Date
  maxDate: Date
}

const setTimelineDate = (year: number): Date => {
  let date = new Date();
  date.setFullYear(year);
  return date;
}

class Timeline extends React.Component<{}, {}> {
  public static TimelineProps = {
    maxDate: setTimelineDate(-2000),
    minDate: setTimelineDate(2000)
  }

  render() {
    return (
      <div>Timeline</div>
    )
  }
}

export default Timeline;
