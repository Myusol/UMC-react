import styled from "styled-components";

export const ProgramContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: 380px;
    gap: 20px;
    justify-content: center;
    margin: 30px 150px;
`;

export const DetailContent = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 40px;
    margin-left: 160px;
`;

export const DetailPoster = styled.img`
    width: 280px;
    height: 400px;
`;

export const DetailTitle = styled.div `
    font-size: 30px;
    font-weight: bold;
    text-align: left;
`;