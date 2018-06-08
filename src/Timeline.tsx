import * as React from 'react';
import TimelineTick from './TimelineTick';
import Panel from './Panel';

import { DataObject } from '../types'

import './Timeline.scss';

interface TimelineProps {
  timelineData: DataObject[]
  title: string
}

interface TimelineState {
  selectedDataObjectIndex: number
}


class Timeline extends React.Component<TimelineProps, TimelineState> {

  constructor(props: TimelineProps) {
    super(props);

    this.state = {
      selectedDataObjectIndex: 0
    }
  }

  selectDate = (idx) => {
    this.setState({
      selectedDataObjectIndex: idx
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1>{this.props.title}</h1>
        <div className="timeline-container">
          <Panel 
            selectedDataObject={this.props.timelineData[this.state.selectedDataObjectIndex]}
          />
          <div className="timeline-ticks-container">
          {
            this.props.timelineData.map((tick, idx) => {
              return (
                <TimelineTick 
                  dataObject={tick} 
                  selectDate={this.selectDate}
                  idx={idx} 
                />
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline;
