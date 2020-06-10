import React from "react"
import styled from 'styled-components'

import IndexBackgroundWave from "../components/indexBackgroundWave"

const Conaiter = styled.div`
    position: relative;
    margin: 80px auto;
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: repeat(2,300px);
    grid-gap: 20px;
`
const SectionLogo = styled.img`
    align-self: end;
    width:128px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    justify-content: center;
    grid-gap: 80px;
    align-items: center;
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
`
const SectionText = styled.p`
    color: white;
    font-size: 20px;
    line-height: 28px;
    width: 480px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    transform: rotate(180deg);
    top:-8px;
`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom:-8px;
`

const Section = props => (
    <Conaiter image={props.image}>
        <WaveTop><IndexBackgroundWave /></WaveTop>
        <WaveBottom><IndexBackgroundWave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </Conaiter>
)

export default Section