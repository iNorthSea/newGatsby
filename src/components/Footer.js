import React from "react"
import styled from 'styled-components'

const Footer = ({data}) => (
    <div>
        {data.allContentfulFootLink.edges.map(edge => (
            <a href = {edge.node.url}>{edge.node.title}</a>
        ))}
    </div>
)

// 使用动态展开.map，edge导入数据。  graphql在layout.js中导入

export default Footer 