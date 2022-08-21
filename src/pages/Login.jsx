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
width:25%;
padding:20px;
background-color:white;
${mobile({width:"75%"})}
`
const Form = styled.form`
display:flex;
flex-direction:column;
`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`
const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container >
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CRAETE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login