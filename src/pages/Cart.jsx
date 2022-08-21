import { ProductionQuantityLimits } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../rseponsive'

const Container = styled.div``
const Wrapper = styled.div`
padding:20px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight:300;
text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==="filled" && "none"};
background-color: ${props => props.type==="filled"? "black" : "transparent"};
color:${props =>props.type === "filled" && "white"};
padding:20px;
`
const TopTexts = styled.div`
${mobile({display:"none"})}
`
const TopText= styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}

`
const Info= styled.div`
flex:3;
`
const Product = styled.div`
display:flex;
justify-consent:space-between;
${mobile({flexDirection:"column"})}
`
const Image = styled.img`
width:200px;
margin-top:10px;
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props =>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
flex-direction:column;
display:flex;
align-items:center;
justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
padding:5px;
${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
margin-top:10px;
`
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
cursor:pointer;
font-weight:600;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.bewakoof.com/t640/women-s-pink-easy-peasy-lemon-squeezy-graphic-printed-boyfriend-t-shirt-499263-1655749094-1.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> Women Pink Lemon-Squeezy Boyfriend T-Shirt</ProductName>
                                <ProductID><b>ID:</b> 499263</ProductID>
                                <ProductColor color="pink" />
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>                       
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>₹900</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.bewakoof.com/t540/varsity-blue-denim-jacket-296420-1638212466-2.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> VARSITY DENIM JACKET</ProductName>
                                <ProductID><b>ID:</b> 296458</ProductID>
                                <ProductColor color="#47B5FF" />
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>                       
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>1</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>₹1200</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹ 2100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₹ 45</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>₹ -45</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total" >
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₹ 2100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart