import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size:30px;
    font-weight: 700;
    
` 

const Desc = styled.p`
    font-weight: 400;
    font-style: 30px;
    margin: 20px 0px;
` 
const SocialContainer = styled.div`
    display: flex;
` 
const SocialIcon = styled.div`
margin-right: 20px;
width: 40px;
height: 40px;
border-radius:50%;
background-color: #${({color}) =>color};
color:white;
align-items:center;
justify-content: center;
display: flex;
` 
const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
   ;
`
const ContactItem = styled.p`
    margin-bottom: 20px;
    display: flex;
    align-items: center; 
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Whale Pay</Logo>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam repellat nobis velit maxime vitae site.</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Pinterest />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Instagram />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishtlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{  marginRight:"10px"}} />Patrick Yakowa way Karji, Kaduna, Kaduna State
            </ContactItem>

            <ContactItem>
                <Phone style={{  marginRight:"10px"}} />+234 706 0633 729
            </ContactItem>

             <ContactItem>
                <MailOutline style={{  marginRight:"10px"}} />whalepay@gmail.com
            </ContactItem>
        

        </Right>
    </Container>
  )
}

export default Footer