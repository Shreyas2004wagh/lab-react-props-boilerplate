import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  constructor(props)
  {
    super()
    this.data=props;
  }
 

  // code here
  render()
  {
    console.log(this.data.props)
    let galleryStyle={
      textAlign:"center"
    }
    let styleMydiv={
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
      placeItems:"Center",
      gap:"100px"
    }
    
      
    return(
      <>
      <h1 style={galleryStyle}>Kalvium Gallery</h1>
      <div style={styleMydiv}>
      <img src={this.data.props[0].img} alt="" width={"400px"}/>
      <img src={this.data.props[1].img} alt="" width={"400px"}/>
      <img src={this.data.props[2].img} alt="" width={"400px"}/>
      <img src={this.data.props[3].img} alt="" width={"400px"}/>
    </div>
      </>
    )
  }
}
