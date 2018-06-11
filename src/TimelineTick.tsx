import * as React from 'react';
import { DataObject } from '../types';


interface TimelineTickProps {
  dataObject: DataObject
  selectDate: (idx: number, offset: string | null) => void
  idx: number
  width?: string
  offset?: string
}

class TimelineTick extends React.Component<TimelineTickProps, {}> {
  handleClick = () => {
    this.props.selectDate(this.props.idx, this.props.offset || null)
  }

  render() { 
    return (
      <div className="timeline-tick" onClick={this.handleClick} style={{width: this.props.width}}>
        {this.props.dataObject.year}
      </div>
    )
  }
}

export default TimelineTick;
