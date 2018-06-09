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

  selectDate = (idx: number): void => {
    this.setState({
      selectedDataObjectIndex: idx
    })
  }
  
  getWidth = () => {
    let timestamps: number[] = 
      this.props.timelineData.map((td: DataObject) => (new Date().setFullYear(td.year)))
      .sort()
 
    let total: number = timestamps[timestamps.length - 1] - timestamps[0];

    return timestamps.map((ts: number, idx: number) => {
      if (idx < timestamps.length - 1) {
        return (timestamps[idx + 1] - timestamps[idx]) / total;
      }
      else {
        return .10;
      }
    });
  }
  render() {
    let widths: number[] = this.getWidth()

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
                  width={`${widths[idx] * 100}%`}
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
