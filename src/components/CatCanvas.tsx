import * as React from 'react'
import { Voyage } from '../loadData';
import { number } from 'prop-types';

interface Position{
  X: number,
  Y: number
}

interface State {
  // collisionVoyages: number[],
  collisionPositions: Position[]

}
interface Props{
  voyages: Voyage[],
  selectedVoyage: Voyage
}

export class CatCanvas extends React.Component<Props, State> {
  state: State = {
    // collisionVoyages: [],
    collisionPositions: []
  }
  
  calculatePointsOfIntersection = () => {
    // clear state.collisionPositions
    this.state.collisionPositions =[];
    
    // var positions : Position[];
    
    this.props.voyages.filter((earlyJourneys) => {
      return earlyJourneys.departureDate < this.props.selectedVoyage.destinationDate
    })
    .filter((toEarlyJourneys) => {
      return toEarlyJourneys.destinationDate > this.props.selectedVoyage.departureDate
    })
    .filter((relevantJourneys) => {
      return Math.max(relevantJourneys.departurePosition[1], relevantJourneys.destinationPosition[1]) >
      Math.min(this.props.selectedVoyage.departurePosition[1], this.props.selectedVoyage.destinationPosition[1])
    }) // let j = journey
    .filter((j) => {
      return Math.min(j.departurePosition[1], j.destinationPosition[1]) <
      Math.max(this.props.selectedVoyage.departurePosition[1], this.props.selectedVoyage.destinationPosition[1])
    })
    .filter((j) => {
      return Math.max(j.departurePosition[0], j.destinationPosition[0]) >
      Math.min(this.props.selectedVoyage.departurePosition[0], this.props.selectedVoyage.destinationPosition[0])
    })
    .filter((j) => {
      return Math.min(j.departurePosition[0], j.destinationPosition[0]) <
      Math.max(this.props.selectedVoyage.departurePosition[0], this.props.selectedVoyage.destinationPosition[0])
    })
    .map((j) => {
      //(Ay-By)/(Ax-Bx);
      var kj = (j.departurePosition[1]-j.destinationPosition[1])/(j.departurePosition[0]-j.destinationPosition[0]); 
      var mj = (j.departurePosition[1] - kj*j.departurePosition[0]);
      //var result = this.lineOf(j.departurePosition[0], j.departurePosition[1], j.destinationPosition[0], j.destinationPosition[1])
      //(Ay-By)/(Ax-Bx);
      var k = (this.props.selectedVoyage.departurePosition[1]-this.props.selectedVoyage.destinationPosition[1])
                /(this.props.selectedVoyage.departurePosition[0]-this.props.selectedVoyage.destinationPosition[0]); 
      var m = (this.props.selectedVoyage.departurePosition[1] - k*this.props.selectedVoyage.departurePosition[0]);

      /**
       * kj*x + mj == k*x + m
       * kj*x - k*x + mj == m
       * (kj-k)x == m - mj
       * x == (m-mj)/(kj-k)
       */

      // x,y is the point of intersection
      var x = (m-mj)/(kj-k);
      var y = k*x + m;

      // is point on line?

      if(x <= Math.max(this.props.selectedVoyage.departurePosition[0], this.props.selectedVoyage.destinationPosition[0])
      && x >= Math.min(this.props.selectedVoyage.departurePosition[0], this.props.selectedVoyage.destinationPosition[0])
      && y <= Math.max(this.props.selectedVoyage.departurePosition[1], this.props.selectedVoyage.destinationPosition[1])
      && y >= Math.min(this.props.selectedVoyage.departurePosition[1], this.props.selectedVoyage.destinationPosition[1])

      && x <= Math.max(j.departurePosition[0], j.destinationPosition[0])
      && x >= Math.min(j.departurePosition[0], j.destinationPosition[0])
      && y <= Math.max(j.departurePosition[1], j.destinationPosition[1])
      && y >= Math.min(j.departurePosition[1], j.destinationPosition[1])){
        
        this.state.collisionPositions.push({X:x, Y:y});
        // positions.push({X:x, Y:y});
        console.log("x: ", x);
        console.log("y: ", y);
      }

      // this.setState({
      //   collisionPositions[... this.state.collisionPosition, {X:x, Y:y}]; 
      // })

    })
    //this.state.collisionPositions = positions; //) .collisionPositions.push({X:x , Y:y});
  }

  updateCanvas = () => {
    if(!this.refs.canvasRef) {
      console.log("no canvasRef to fetch");
      return;
    }

    var canvas: HTMLCanvasElement = this.refs.canvasRef as HTMLCanvasElement;
    var ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    var w = canvas.width;
    var h = canvas.height;

    // ctx.fillStyle = "grey"; 
    ctx.clearRect(0,0, w, h);

    // ctx.beginPath();
    // ctx.rect(0,0,w,h); 
    // ctx.fill();
    // ctx.closePath();
    
    // Draw dots
    this.state.collisionPositions.map((collision) => {
      if(Math.round(collision.X) + w/2 <= w 
            && Math.round(collision.X) + w/2 >= 0 
            && Math.round(collision.Y) + h/2 <= h 
            && Math.round(-collision.Y) + h/2 >= 0){

        ctx.fillStyle = 'black'; 
        ctx.beginPath();
        ctx.rect(Math.round(collision.X) + w/2 -1, Math.round(-collision.Y) + h/2 -1, 3, 3);
        ctx.fill();
        ctx.closePath();
      }    
    })

    // Draw line
    ctx.beginPath();
    ctx.moveTo(this.props.selectedVoyage.departurePosition[0] + w/2, -this.props.selectedVoyage.departurePosition[1] + h/2);
    ctx.lineTo(this.props.selectedVoyage.destinationPosition[0] + w/2, -this.props.selectedVoyage.destinationPosition[1] + h/2);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
  }

  // private canvasRef = React.createRef<HTMLCanvasElement>();

  render() {
    this.calculatePointsOfIntersection();
    setTimeout(() => this.updateCanvas(), 100); 
    return (
      <div>
        <canvas ref="canvasRef" style={{marginLeft: '40%', border: '1px solid black'}} width="440" height="440"></canvas>
      </div>
    )
  }
}

export default CatCanvas
