import styled from "@emotion/styled"

const Resultad = styled.div`
    color: #FFF;
    font-family:'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Parrafo = styled.p`
    font-size: 15px;
    text-align:center;
    span{
    font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 20px;
    text-align:center;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    

`
const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado
  return (
    <Resultad>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Parrafo>El precio más alto del día es de: <span>{HIGHDAY}</span></Parrafo>
            <Parrafo>El precio más bajo del día es de: <span>{LOWDAY}</span></Parrafo>
            <Parrafo>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Última Actualización: <span>{LASTUPDATE}</span></Parrafo>          
        </div> 
    </Resultad>
  )
}

export default Resultado
