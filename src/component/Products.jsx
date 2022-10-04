import React from 'react'
import styled from 'styled-components'
import {popularProduct} from '../data'
import Product from './Product'

const Container = styled.div`
    flex-wrap:wrap ;
    padding: 20px;
    display: flex;
    justify-content: space-between;

`

const Products = () => {
  return (
    <Container>{popularProduct.map((item)=>(
        <Product item = {item}  key={item.id}/>
    ))}</Container>
  )
}

export default Products