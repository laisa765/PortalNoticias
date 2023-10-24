import './App.css';
import {Component} from 'react';
class App extends Component{
  state = {
  noticias: []

  }
  componentDidMount(){
          fetch('http://portal-noticias-ifms.herokuapp.com/apinoticias')
               .then(response => response.json())
               .then(noticias => this.setState({noticias}))
  }
     render(){
       const { noticias } = this.state;
           return (
  <div className="App">
  {noticias.map(noticia => (
  <     div key={noticia.id_noticia}>
       <h1> {noticia.titulo} </h1>
        <p> {noticia.resumo} </p>
        <p> {noticia.autor} </p>
        <p> {noticia.data} </p>
        <p> {noticia.noticia} </p>



  </div>
  ))}
  </div>
  );
  }
 } 
 

export default App;
