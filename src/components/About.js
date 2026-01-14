import React from 'react'
import {useLoaderData} from "react-router"

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      endorse: false,
      userInfo: {dummy: "dummyvalue"}
    };
  }

  async componentDidMount(){
    console.log("used for Api fetching and is called once after the render, also it will be called after render method")

    // const data = await fetch("dummy api");
    // const JsonData = await data.json();
    // console.log(JsonData)

    // this.setState({
    //   userInfo: JsonData
    // });
  }

  componentDidUpdate(){
    console.log("called on each time the component is rendered, and checks change of states")
  }

  componentWillUnmount(){
    console.log(" it is called just before the component is unmouted and is used to clear the messcreated");
    console.log("used for clearing intervals etc")
  }  

  render() {
    return(
      <div className='Container'>
        <p>Name: Gaurav</p>
        <p>location: Delhi</p>
        <button className="endore" style={{background: this.state.endorse ? "green" : "none" }} onClick = {()=>{
          this.setState({endorse: !this.state.endorse});
        }}
        >{this.state.endorse ? "Endorsed" : "Endorse"}</button>
      </div>
    )
    
  }
}

export default About