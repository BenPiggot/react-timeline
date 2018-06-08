import * as React from 'react';
import moment from 'moment';

import './Timeline.scss';

interface TimelineProps {
  minDate?: Date
  maxDate?: Date
  timespan?: number[]
}

const setTimelineDate = (year: number): Date => {
  let date = new Date();
  date.setFullYear(year);
  return date;
}

class Timeline extends React.Component<TimelineProps, {}> {
  public static defaultProps: TimelineProps = {
    maxDate: setTimelineDate(2500),
    minDate: setTimelineDate(-2000),
    timespan: [-2000, 2500]
  }

  constructor(props: TimelineProps) {
    super(props);
  }

  render() {
    const min: number = this.props.timespan ? this.props.timespan[0] : -2000;
    const max: number = this.props.timespan ? this.props.timespan[1] : 2500;
    return (
      <div className="app-container">
        <h1>Timeline</h1>
        <div className="timeline-container">
          {
            Array.from(Array(Math.abs(min) + Math.abs(max)), (_, i) => {
              return min + i
            })
            .map(x => {
              return (
                <div className="timeline-tick">
                  {x}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Timeline;
