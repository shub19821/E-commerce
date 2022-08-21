import React from 'react'
import styled from 'styled-components'
import { mobile } from '../rseponsive'

const Container = styled.div`
width:100vw;
height:100vh;
background: url("https://png.pngtree.com/background/20210710/original/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-picture-image_1048684.jpg") center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
${mobile({width:"75%"})}
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;

`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`


const Register = () => {
  return (
    <Container style={{overflow:"hidden"}}>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First-Name" />
                <Input placeholder="Last-Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm-Password" />
                <Agreement>
                    By craeting an account, I consent to the processing of my personal
                     data in accordance with the <b>PRIVACY POLICY</b>.
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register