import { useState } from 'react'
import styled from 'styled-components'

const Baloon = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 150px;
  background-color: red;
  transform: scale(${({size}) => size})
`

function Home() {
    const [size, setSize] = useState(1)

    return (
      <div>
        <h1 onClick={() => setSize(size + 0.1)} >Page d'accueil 🏡</h1>
        <Baloon size={size} />
      </div>
    )
  }
  
  export default Home