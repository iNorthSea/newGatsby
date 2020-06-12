import React from "react"
import styled from 'styled-components'
import Cell from "./cell"
import staticdata from "../staticdata.json"

const GridTextTitle = styled.h3`
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
`

const GridTextGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-content: center;
    max-width: 900px; 
    margin: 60px auto;

    @media (max-width: 900px) {
        grid-template-columns: 500px;
        margin: 80px;
    }
`

const GridText = () => (
    <div>
        <GridTextTitle>12 sections - 6 hours</GridTextTitle>
        <GridTextGroup>
            {staticdata.cells.map(cell => (
                <Cell
                title={cell.title}
                image={cell.image}
                // image={cell.image.indexOf('http') > -1 ? cell.image : require(cell.image)}
                />
            ))}
        </GridTextGroup>
    </div>
)

export default GridText