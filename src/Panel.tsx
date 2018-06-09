import * as React from 'react';
import{ DataObject } from '../types';
import './Panel.scss';

interface PanelProps {
  selectedDataObject: DataObject 
}

class Panel extends React.Component<PanelProps, {}> {
  render() {
    return (
      <div className="panel">
        <h1>{this.props.selectedDataObject.year}</h1>
        <img src={this.props.selectedDataObject.image} />
      </div>
    )
  }
}

export default Panel;
