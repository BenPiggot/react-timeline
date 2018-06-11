import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import{ DataObject } from '../types';
import './Panel.scss';

interface PanelProps {
  selectedDataObject: DataObject 
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

  render() {
    return (
      <div className="panel">
        <CSSTransitionGroup
          transitionName="panel-content"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          style={{ display: 'flex', marginLeft: '10%', marginRight: '10%' }}
        >   
          <div>
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
