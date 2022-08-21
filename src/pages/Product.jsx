import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../rseponsive'

const Container = styled.div``
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px" ,flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex:1;
${mobile({alignItems:"center", justifyContent:"center", display:"flex"})}
`
const Image = styled.img`
width:90%;
height:95vh;
object-fit:cover;
${mobile({height:"40vh", width:"60%", objectFit:"cover"})}
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
${mobile({width:"100%"})}
`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;

`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props =>props.color};
margin:0px 5px;
cursor:pointer;

`
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount = styled.span`
width:30px;
heght:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
    background-color:#f8f4f4;
}
`

const Product = () => {
  return (
    <Container>
       <Navbar/>
       <Announcement/>
       <Wrapper>
           <ImgContainer>
               <Image src="https://images.bewakoof.com/t640/women-s-pink-easy-peasy-lemon-squeezy-graphic-printed-boyfriend-t-shirt-499263-1655749094-1.jpg" />
           </ImgContainer>
           <InfoContainer>
               <Title>Women's Pink Printed Boyfriend T-shirt</Title>
               <Desc>This Easy Peasy Lemon Squeezy Women's Boyfriend T-Shirt is for everyone who likes to 
                     keep things light & fun. Pair this pink t-shirt with a denim skirt, kitten heels and 
                     a micro bag for a breezy appeal.
                     Country of Origin - India
                     
                     Manufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, 
                     Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302

                     Packed By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite 
                     All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302

Commodity - Women's T-Shirt
                </Desc>
               <Price>₹449</Price>
               <FilterContainer>
                   <Filter>
                       <FilterTitle>Color</FilterTitle>
                       <FilterColor color="pink" />
                       <FilterColor color="green" />
                       <FilterColor color="blue" />
                   </Filter>
                   <Filter>
                       <FilterTitle>Size</FilterTitle>
                       <FilterSize>
                           <FilterSizeOption>XS</FilterSizeOption>
                           <FilterSizeOption>S</FilterSizeOption>
                           <FilterSizeOption>M</FilterSizeOption>
                           <FilterSizeOption>L</FilterSizeOption>
                           <FilterSizeOption>XL</FilterSizeOption>
                       </FilterSize>
                   </Filter>
               </FilterContainer>
               <AddContainer>
                   <AmountContainer>
                       <RemoveIcon/>
                       <Amount>1</Amount>
                       <AddIcon/>
                   </AmountContainer>
                   <Button>ADD TO CART</Button>
               </AddContainer>
           </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
    </Container>
  )
}

export default Product