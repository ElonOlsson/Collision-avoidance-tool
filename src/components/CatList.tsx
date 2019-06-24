import * as React from 'react'
import CatListItem from './CatListItem'
import {Voyage, Ship} from '../loadData'

interface State {
  selected: boolean
}
interface Props{
  select(voyage: Voyage): void,
  voyages: Voyage[]
  ships: Ship[]
}

export class CatList extends React.Component<Props, State> {
  state= {
    selected:  false
  }

  render() {
    
    return this.props.voyages.map((voyage) => 
      <CatListItem key={voyage.voyageId} 
                   voyage={voyage}
                   ships={this.props.ships}
                   select ={this.props.select}/>
      )
  }
}

export default CatList
