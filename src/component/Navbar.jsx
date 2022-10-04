import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{cursor:"pointer"}} /> 
                </SearchContainer>
            </Left>
            <Center><Logo>WhalePay</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    height:60px;
    max-width:100% ;
    padding-bottom:15px ;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between ;
    align-items:center ;
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    font-weight:20px;
    margin:25px ;
`
const SearchContainer = styled.div`
    border: 1px solid gray;
    padding:5px;
    align-items:center ;
    display :flex;

`
const Input = styled.input`
    border:none ;
`

const Center = styled.div`
    flex: 1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight:bold;
    font-size: 30px;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
const MenuItem = styled.a`
    margin:25px;
    cursor: pointer;
`