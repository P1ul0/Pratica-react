import { useState} from "react"
import imagem from '../src/assets/imagem.png'


function App() {

  //exemplo 1
  /*const [numero, setNumero] = useState(0)
  function handleclick(){
    setNumero(atual => atual + 1)
  }

  function decreaseValue(){
    if(numero > 0){
      setNumero(atual => atual - 1)
    }else{
      setNumero(atual => atual)
    }   
  }*/
  /*<h1>{numero}</h1>
  <button onClick={handleclick}>adicionar</button>
  <button onClick={decreaseValue}>diminuir</button>*/

/*
  const [ nome , setNome] = useState('')
  <h1>{nome}</h1>
  <input value={nome} onChange={event => setNome(event.target.value)}></input>*/
/*
  const [h, setH] = useState('100')
  const [ w, setW] = useState('100')
  <img src={imagem} height={`${h}px`} width={`${w}px`} alt=""/>
  <br/>
  <input type="number" value={h} onChange={event => setH(parseFloat( event.target.value))}></input>
  <input type="number" value={w} onChange={event => setW(parseFloat( event.target.value))}></input>*/

  const [email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  function validatePassword () {
    if(password.length <= 8){
      alert("Password inválida")
    }
  }
  return (
    <div>
      <input type="text" value={email} onChange= { e => setEmail(e.target.value)} placeholder="E-mail"></input>
      <input type="password" value={password} onChange= { e => setPassword(e.target.value)} placeholder="Password"></input>

      <button onClick={validatePassword}>entrar</button>

    </div>
  );
}

export default App;
