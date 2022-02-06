import styled from "styled-components";

export const TableLine = styled.tr`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableColumn = styled.td<{width?: number}>`
    padding: 10px 0;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'}; 
    
`;

export const Category = styled.div<{color?: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color ? `${props.color}` : '#fff'};;
`;

export const Value = styled.div<{color?: string}>`
    color: ${props => props.color ? `${props.color}` : '#000'};
    font-weight: bold;
`;