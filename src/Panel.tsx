import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import{ DataObject } from '../types';
import './Panel.scss';

interface PanelProps {
  selectedDataObject: DataObject 
  selectDate: (idx: number, offset: string | null) => void
  idx: number
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

  handleForwardArrow = () => {
    if (this.props.idx < 1) return;
    this.props.selectDate(this.props.idx - 1, this.props.offset)
  }

  render() {
    return (
      <div className="panel">
        <CSSTransitionGroup
          transitionName="panel-content"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          style={{ display: 'flex', marginLeft: '5%', marginRight: '5%' }}
        > 
          {
            this.props.idx > 0 ?
              <div className="left-arrow" onClick={this.handleForwardArrow}>
                &#60;
              </div> : 
              null 
          }
          <div >
            <h1>{this.props.selectedDataObject.year}</h1>
            <p>{this.props.selectedDataObject.description}</p>
          </div>
          <img src={this.props.selectedDataObject.image} key={this.props.selectedDataObject.image}/>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Panel;
