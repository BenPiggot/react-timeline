import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import{ DataObject } from '../types';
import './Panel.scss';

interface PanelProps {
  selectedDataObject: DataObject 
  selectDate: (idx: number, offset: string | null) => void
  idx: number
  max: number
  offset: string | null
}

interface PanelState {
  show: boolean
  entered: boolean
}

class Panel extends React.Component<PanelProps, PanelState> {
  constructor(props: PanelProps) {
    super(props);

    this.state = {
      show: false,
      entered: false
    }
  }

  handleBackArrow = () => {
    if (this.props.idx < 1) return;
    this.props.selectDate(this.props.idx - 1, this.props.offset)
  }

  handleForwardArrow = () => {
    if (this.props.idx >= this.props.max - 1) return;
    this.props.selectDate(this.props.idx + 1, null)
  }

  render() {
    return (
      <div className="panel">
        {
          this.props.idx > 0 ?
            <div className="left-arrow" onClick={this.handleBackArrow}>
              &#60;
              </div> :
            <div className="left-arrow">
            </div>
        }
        <CSSTransitionGroup
          transitionName="panel-content"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          style={{ display: 'flex', marginLeft: '5%', marginRight: '5%', alignItems: 'center' }}
        > 
          <div className="text-group">
            <CSSTransitionGroup
              transitionName="text-content"
              transitionEnterTimeout={100}
              transitionLeaveTimeout={100}>
                <h1>{this.props.selectedDataObject.year}</h1>
                <p>{this.props.selectedDataObject.description}</p>
            </CSSTransitionGroup>
          </div>
          <img src={this.props.selectedDataObject.image} key={this.props.selectedDataObject.image}/>
        </CSSTransitionGroup>
        {
          this.props.idx < this.props.max - 1 ?
            <div className="right-arrow" onClick={this.handleForwardArrow}>
              &#62;
              </div> :
            <div className="right-arrow">
            </div>
        }
      </div>
    )
  }
}

export default Panel;
