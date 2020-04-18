import React, { Component } from 'react';

class Showo extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      content : "",
      iduniq : "az"+String(Math.random()).replace(".","") 
      });
  }

  componentDidMount(){
      this.animation()
  }
    
  animation(){
    let destino = document.querySelector(`.${this.state.iduniq}`);
    let div = document.createElement("div");
    div.classList.add("div")
    div.style.padding = this.props.pd; //pd = padding
    div.style.background = this.props.bg; //bg = background
    div.style.color = this.props.fg; //fg = foreground
    div.style.fontWeight = "bold";
    div.style.borderRadius = this.props.br; //br = border Radius
    div.style.fontFamily = "Arial";
    div.style.fontSize = String(Number(this.props.fs)+50)+"%" ; //fs = fontsize = same size for geometry and fontsize
    div.style.textAlign = this.props.ta; // ta = text align 

    div.style.position = "fixed";
    div.style.margin = "auto";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)"
    
    div.animate([
      {
        opacity:"0", transform : "scale(0.5) translate(-50%, -50%)",
        top:"50%", left:"50%",
        fontSize:"110%"
      },{
        opacity:"1", transform : "scale(1) translate(-50%, -50%)",
        top:"50%", left:"50%",
        fontSize:String(Number(this.props.fs)+50)+"%" //fs = font size for geometry and fontsize
      }
    ],{duration:1000,iterations:1})

    div.textContent = this.props.children
    
    destino.appendChild(div)

    setTimeout(()=>{
      div.animate([
        {
          opacity:"1", transform:"scale(1) translate(-50%, -50%)",
          top:"50%", left:"50%", margin:"auto", position:"fixed"
        },{
          opacity:"0", transform:"scale(0.5) translate(-50%, -50%)",
          top:"50%", left:"50%", margin:"auto", position:"fixed"
        }
      ],{duration:1000,iterations:1})

    },5000)

    setTimeout(()=>{
      div.remove()
      destino.remove()
    },6000)

  }
  
  render() {
    return (
      <div className={this.state.iduniq}>
      </div>
    );
  }
}


Showo.defaultProps = {
  bg: 'linear-gradient(to right top, #9c6bd1, #de69b5, #ff7794, #ff9577, #ffb96c, #f9be69, #f3c466, #ecc965, #f4b156, #fa9751, #fd7c55, #fb5f5f)', // background
  fg: '#fff', // foregroudn
  br: "10px", // border radius
  pd: "40px", // padding
  fs: "150", // font size
  ta: "center"  //text align
};

export default Showo;
