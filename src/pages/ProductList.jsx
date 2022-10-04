import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"
import Products from "../component/Products"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between ;
    `
const Filter= styled.div`
    margin: 20px;
`
const FilterdText = styled.span`
    font-size:20px;
`
const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterdText>filter products</FilterdText></Filter>
            <Filter><FilterdText>sort products</FilterdText></Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList