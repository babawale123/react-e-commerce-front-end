import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Image src='../img/macpro.jpg' /></Left>
            <Right>
                <Title>Welcome to WhalePay</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat nam blanditiis aliquam ea magni numquam corporis quo iusto nihil </Desc>
                <Button>Explore</Button>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    max-width:100%;
  
`
const Wrapper = styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center;
    padding:10px 20px;
`
const Left = styled.div`
 flex: 1;
 margin:25px ;

`
const Image = styled.img`
 border-radius:15px ;
 border:1px solid gray ;
 background-color:#fff6f6 ;
 margin:10px ;
 width:100% ;
`
const Right = styled.div`
  flex:1 ;
  align-items:center;
`
const Title = styled.h2`
    font-weight: Bold;
    font-size:30px;
    text-align: center;
    color:teal;
`
const Desc = styled.p`
    font-size: 24px;
    text-align:center;
    font-weight: 1em;
`
const Button = styled.button`
    align-items:center;
    padding:20px;
    border-radius: 10px;
    border: solid #fff 0.5px;
    width:50% ;
    background-color:teal ;
    margin: auto 0;
    cursor: pointer;
    color:#fff

  
    
`