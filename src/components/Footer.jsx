import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ADAM BUKU SUNNAH</Logo>
                <Desc>Berdagang untuk Dakwah - Ilmu akan mengangkat derajat seorang Muslim. Dengan Ilmu beramal dan beramal dengan ilmu.</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Pakaian Muslim</ListItem>
                    <ListItem>Herbal</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whislist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Jl Pramuka No 48 Mlati Lor, Kec Kudus Kota, Kab Kudus, Jawa Tengah, 59319
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +62 853 486 161 97
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> adambukusunnah@gmail.com
                </ContactItem>
                <Payment src="https://sundaweb.co.id/wp-content/uploads/2021/03/Semua-Logo-Pembayaran-Transparant-1024x222-1.png" />
            </Right>
        </Container>
    )
}

export default Footer