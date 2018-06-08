import * as React from 'react';

type DataObject = {
  year: number
}

interface TimelineTickProps {
  dataObject: DataObject
  selectDate: (idx: number) => void
  idx: number
}

class TimelineTick extends React.Component<TimelineTickProps, {}> {
  handleClick = () => {
    this.props.selectDate(this.props.idx)
  }

  render() { 
    return (
      <div className="timeline-tick" onClick={this.handleClick}>
        {this.props.dataObject.year}
      </div>
    )
  }
}

export default TimelineTick;
