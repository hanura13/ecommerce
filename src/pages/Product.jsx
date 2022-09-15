import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    align-items: center;
    display: flex;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://weborder.id/pbs/uploads/DOA_DOA_HARIAN.jpeg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>BUKU ANAK DOA DOA PILIHAN</Title>
                    <Price>Rp.18,000</Price>
                    <Desc>Di dalam buku ini akan dituntun membaca do’a pilihan :
                        Do’a mohon ampunan untuk kedua orangtua, agar hati dalam
                        kepatuhan, dimudahkan dalam segala urusan, kebaikan di dunia
                        dan masih banyak lagi.</Desc>

                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>

            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product