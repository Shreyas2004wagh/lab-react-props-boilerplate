import './App.css';



function App(props) {
  console.log(props)
  let data=props.props;
  // code here
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
    {/* <div style={styleMydiv}>
      <img src={data[0].img} alt="" width={"400px"}/>
      <img src={data[1].img} alt="" width={"400px"}/>
      <img src={data[2].img} alt="" width={"400px"}/>
      <img src={data[3].img} alt="" width={"400px"}/>
    </div> */}


    <div style={styleMydiv}>
      {data.map((el)=>(
        <div key={el.id}>
        <img src={el.img} width={"400px"} alt="" />
      </div>
      ))}
    </div>
    </>
  )
}

export default App;
