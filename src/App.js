
import './App.css';

function App() {
      // const data=[
      //   {
      // headind:"Mobile Operating System",
      // phone:["Android","Blackberry","iPhone","Windows Phone"]
      //   },
      //   {
      //     headind:"Mobile Manufaturers",
      // phonex:["Samsung","HTC","Micromax","Apple"]
      //   }
      // ]
const phone=["Android","Blackberry","iPhone","Windows Phone"]
const phonex=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      <div className="App-bold">Mobile Operating System</div>
      {phone.map((ele)=>(
        <li>{ele}</li>
      ))}
      <div className="App-bold">Mobile Manufaturers</div>
      {phonex.map((el)=>(
        <li>{el}</li>
      ))}
      {/* {
        data.map((el)=>(
          <h1>{el.headind}</h1>
        ))
      } */}
    </div>
  );
}

export default App;
