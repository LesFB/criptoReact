import React from 'react'
import styled from '@emotion/styled'

const  Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 8px;
    font-size: 10px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>
      <h1>{children}</h1>
    </Texto>
  )
}

export default Error
