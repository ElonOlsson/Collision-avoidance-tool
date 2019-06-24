import * as React from 'react'
import { Voyage, Ship } from '../loadData';

interface State {
  isSelected : boolean
}
interface Props{
  select(voyage: Voyage): void,
  voyage: Voyage,
  ships: Ship[]
}

export class CatListItem extends React.Component<Props, State> {
  state: State ={
    isSelected : false
  }
  shipName = '';
  getShipName = () => {
    this.props.ships.map((ship) => {
      if(ship.shipId === this.props.voyage.shipId){
        this.shipName = ship.name;   
      }
    })
  }
  getStyle = () => {
    if(this.state.isSelected){
      return {
        backgroundColor: '#b3b3b3',
        padding: '8px',
        border: '10px Black',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    }
    else{
      return {
        backgroundColor: '#cccccc',
        padding: '7px',
        textAlign: 'center'
      }
    }
  }

  setCorrectState = () => { // should be set from CatList.
    this.state.isSelected ?
      this.setState({isSelected: false}) :
      this.setState({isSelected: true})
  }
  // https://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js
  // funderar på att göra onClick på CatList istället för Item.
    render() {
    this.getShipName();
    return (
      <div style={this.getStyle()} 
           onClick={(event) => { 
            this.props.select(this.props.voyage) //.bind(this, this.props.voyage);
            this.setCorrectState();
            
           }}>
          <p>
            {this.shipName}   
            {'  -  '}
            {this.props.voyage.departureDate}
          </p> 
      </div>
    )
  }
}

const SelectedListItemStyle = {
  background: '#f2f2f2',
  padding: '8px',
  borderBottom: '1px #ccc dotted',
}

export default CatListItem
