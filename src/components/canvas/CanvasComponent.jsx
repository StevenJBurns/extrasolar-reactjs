import React from 'react';
import { connect } from "react-redux";

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);

    this.refCanvas = React.createRef();

    this.state = {
      w: window.innerWidth,
      selectedSystem: null,
      relatedPlanets: null,
      starfield: []
    }
  }
  
  updateCanvas() {
    this.setState({ w: window.innerWidth - 8 });

    const ctx = this.refCanvas.current.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 2048, 2048); 

    this.drawCanvas();
  };

  drawCanvas() {
    let ctx = null;
    ctx = this.refCanvas.current.getContext('2d');

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 2048, 2048);

    // Build a random starfield for the canvas
    if (this.state.starfield.length === 0 || !this.state.starfield) {      
      for (let i = 0; i < (this.state.w / 2); i++) {
        let randomX = Math.floor(Math.random() * ctx.canvas.width * 4);
        let randomY = Math.floor(Math.random() * ctx.canvas.height * 2);
        let randomO = Math.random();
        // Create an array [x, y, o] for each star from the above variables then push it into this.state.starfield array
        // x and y are randomized coords based on canvas size
        // o is a random opacity (conveniently) from 0 to 1 for the illusion of depth in render stars
        this.state.starfield.push([randomX, randomY, randomO]);
      }
    }

    for (let star of this.state.starfield) {
      ctx.fillStyle = `rgba(255,255,255,${star[2]})`;
      ctx.beginPath();
      ctx.arc(star[0], star[1], 1, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }

    this.drawStar(this.state.selectedSystem);
  };

  drawStar(star) {
    if (!star) return;

    const ctx = this.refCanvas.current.getContext("2d");
    const w = this.state.w - 8;

    let rgStar = ctx.createRadialGradient(w / 2, 180, 4, w /2, 180, 80);
    rgStar.addColorStop(0, "#FFFF99");
    rgStar.addColorStop(0.05, "rgba(255,255,127,255)")
    rgStar.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = rgStar;
    ctx.beginPath();
    ctx.arc(w /2, 180, 96, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateCanvas.bind(this));    
    
    console.log(this.refCanvas);
    
    const ctx = this.refCanvas.current.getContext('2d');

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 2048, 2048); 

    this.drawCanvas();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        selectedSystem: nextProps.selectedSystem,
        relatedPlanets: nextProps.relatedPlanets
      }
    );

    this.drawCanvas();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCanvas.bind(this))
  }

  render() {
    return (
      <div>
        <canvas ref={this.refCanvas} width={this.state.w} height={this.state.w <= 800 ? this.state.w / 2 : 400} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { stars, planets, selectedSolarSystem, isLoading, error } = state.data;
  return { stars, planets, selectedSolarSystem, isLoading, error };
};

export default connect(mapStateToProps, null)(CanvasComponent);