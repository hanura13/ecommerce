import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Aqidah</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option disabled selected>
                            Penerbit
                        </Option>
                        <Option>Pustaka Azzam</Option>
                        <Option>Pustaka Al Kautsar</Option>
                        <Option>Darus Sunnah</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option elected>
                            Nama
                        </Option>
                        <Option>A - Z</Option>
                        <Option>Terbaru</Option>
                        <Option>Terlama</Option>
                        <Option>Harga Terendah</Option>
                        <Option>Harga Tertinggi</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList