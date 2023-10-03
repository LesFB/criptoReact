import React from 'react'
import '../styles/Spinner.css'
import styled from '@emotion/styled'


const Contenedor=styled.div`
    margin-top:100px;
`
const Spinner = () => {
  return (
    <Contenedor>
    <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
    </div>
    </Contenedor>
  )
}

export default Spinner
