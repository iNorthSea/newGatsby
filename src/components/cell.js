import React from "react"
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-column-gap: 28px;
    justify-items: start;
    align-items: center;

    @media (max-width: 900px ){
        justify-self: start;
    }
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 12px;
    background-image: url(${props => props.image});
    background-size: 60px;
`

const CellTitle = styled.div`
    font-size: 24px;
    color: #323238;
    border-bottom: 1px solid rgba(31, 31, 35, 0.1);
    padding: 16px 0;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image} />
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell