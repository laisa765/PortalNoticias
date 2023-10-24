import '../App.css';
import {Component} from 'react';
class App extends Component{
  render(){
    return(
      <div className="cabecalho" >
       
        <h1 className="Cabecalho"><img id="logo" src="img/logoportal.jpg" 
         width="10%" height="50%"  left="4%"></img>  <h2 className='titulo'>Noticias</h2></h1>
        
      </div>
    );
  }
}

export default App;
