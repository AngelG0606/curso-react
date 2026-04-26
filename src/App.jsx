import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FormLabel from './components/form/FormLabel'
import FormInput from './components/form/FormInput'
import FormSubmit from './components/form/FormSubmit'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState({
    name : '',
    lastName : ''
  })

  const [number, setNumber] = useState(22)

  const handleClick = () => {
    setNumber(444)
  }

  const handleChangeNumber = () => {
    setNumber(342343432430)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
  }
  
  const handleChange = (e) => {
    setInput(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }


  


  return (
    <>
      <h1>Estoy aprendiendo REACT</h1>

      <FormLabel>Hola</FormLabel>

      <p>
        {number}
      </p>

      <button 
        onClick={handleChangeNumber}
      >
        Cambiar Número
      </button>

      <form 
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          name="name" 
          onChange={handleChange}
          value={input.name}
        />

      <input 
        type="text"
        name="lastName"
        onChange={handleChange}
        value={input.lastName}
      />
        
        <FormSubmit 
          valor={'Enviar Formulario'}
        />

      </form>

      
    </>
  )
}

export default App
