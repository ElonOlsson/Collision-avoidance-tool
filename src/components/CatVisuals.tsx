import * as React from 'react'
import CatCanvas from './CatCanvas'
import CatList from './CatList'
import CatInformation from './CatInformation'

import { Voyage, Ship } from '../loadData';


interface State {
  enabled: boolean,
  selectedVoyage: Voyage,
  sorted: string
}
interface Props{
  voyages: Voyage[]
  ships: Ship[]
}

export class CatVisuals extends React.Component<Props, State> {
  state: State = {
    enabled: true,
    sorted: 'time',
    selectedVoyage: {
                    shipId: 0,
                    voyageId: 0,
                    departurePort: "",
                    departureDate: "",
                    departurePosition: [ 0, 0 ],
                    destinationPort: "",
                    destinationDate: "",
                    destinationPosition: [ 0, 0 ],
                    cargoWeight: 0,
                    hfoFuelConsumption: 0,
                    distance: 0,
                    displacement: 0
                   }
  }


  select = (voyage: Voyage) => {
    this.setState({selectedVoyage: voyage});
  }

  render() {
    console.log("from CAT Visuals: selected voyage ", this.state.selectedVoyage.voyageId);

    return (
      <div>
        <CatCanvas selectedVoyage={this.state.selectedVoyage}
                   voyages={this.props.voyages}/>
        <CatList voyages={this.props.voyages}
                 ships={this.props.ships}
                 select = {this.select}/>
        <CatInformation />
      </div>
    )
  }
}



export default CatVisuals
