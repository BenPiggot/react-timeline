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
  ticksContainerStyle: React.CSSProperties
}


class Timeline extends React.Component<TimelineProps, TimelineState> {

  constructor(props: TimelineProps) {
    super(props);

    this.state = {
      selectedDataObjectIndex: 0,
      ticksContainerStyle: { transform: 'translate(0%)'}
    }
  }

  selectDate = (idx: number, offset: string | null): void => {
    console.log(offset)
    let translate: string = offset && idx > 0 ? `translate(-${offset})` : 'translate(0%)';
    this.setState({
      selectedDataObjectIndex: idx,
      ticksContainerStyle: { transform: translate }
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
        return .01;
      }
    });
  }

  getOffset = (widths: number[], idx: number): string => {
    let accumulator = 0;
    for (let i = 0; i < idx; i++) {
      accumulator += widths[i];
    }
    return `${(accumulator - .03) * 100}%`;
  }

  render() {
    let widths: number[] = this.getWidth()

    return (
      <div className="app-container">
        <h1 className="timeline-title">{this.props.title}</h1>
        <div className="timeline-container">
          <Panel 
            selectedDataObject={this.props.timelineData[this.state.selectedDataObjectIndex]}
            idx={this.state.selectedDataObjectIndex}
            max={widths.length}
            selectDate={this.selectDate}
            offset={this.getOffset(widths, this.state.selectedDataObjectIndex > 0 ? this.state.selectedDataObjectIndex - 1 : 0)}
          />
          <div className="timeline-ticks-container" style={this.state.ticksContainerStyle}>
          {
            this.props.timelineData.map((tick, idx) => {
              if (idx === 0) {
                return (
                  <TimelineTick
                    dataObject={tick}
                    selectDate={this.selectDate}
                    idx={idx}
                    width={`${widths[idx] * 100}%`}
                  />
                )
              }
              else if (idx < this.props.timelineData.length - 1) {
                return (
                  <TimelineTick 
                    dataObject={tick} 
                    selectDate={this.selectDate}
                    idx={idx}
                    width={`${widths[idx] * 100}%`}
                    offset={this.getOffset(widths, idx)}
                  />
                )
              }
              else {
                return (
                  <TimelineTick
                    dataObject={tick}
                    selectDate={this.selectDate}
                    idx={idx}
                    offset={this.getOffset(widths, idx)}
                  />
                )
              }
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline;
