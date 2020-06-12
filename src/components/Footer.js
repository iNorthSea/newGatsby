import React from "react"
import styled from 'styled-components'

const Container = styled.div`
    /* position: absolute; */
    padding: 40px 0;
    width: 100%;
    height: 540px;
    background: #F1F3F5;
    display: grid;
    grid-template-rows: 140px 120px 180px 120px;
    grid-gap: 8px;
    align-items: center;
`

const Title = styled.h3`
    margin: 40px auto 0;
    width: 540px;
    font-size: 24px;
    color: #486791;
    text-align: center;
`

const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.2);
    max-height: 60px;
    border-radius: 30px;
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    text-align: center;
    padding: 12px 60px;
    outline: none;
    border: none;
    cursor: pointer;
    justify-self: center;

    transition: 0.2s ease-out;

    &:hover {
        transform: scale(1.2);
        box-shadow: 0px 4px 40px rgba(101, 41, 255, 0.12);
    }
`

const LinkGroup = styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-column-gap: 100px;
    grid-row-gap: 20px;
    margin: 0 auto;
    max-width: 800px;
    justify-content: center;
    align-items: center;
`
const LinkTitle = styled.h3`
    font-size: 18px;
    text-transform: uppercase;
    color: #94A4BA;
    margin: 0;
`

const Text = styled.p`
    width: 620px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #486791;
    justify-self: center;
`

const Footer = ({data}) => (
    <Container>
        <Title>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</Title>
        <Button>Tweet</Button>
        <LinkGroup>
            <LinkTitle>Main</LinkTitle>
            <LinkTitle>Download</LinkTitle>
            <LinkTitle>Community</LinkTitle>
            {data.allContentfulFootLink.edges.map(edge => (
                <a href = {edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Text>Backgrounds made in Cinema 4D, iOS app in Swift, site in React. Email us to ask anything. © 2018 - Terms of Service - Privacy Policy</Text>
    </Container>
)

// 使用动态展开.map，edge导入数据。  graphql在layout.js中导入

export default Footer