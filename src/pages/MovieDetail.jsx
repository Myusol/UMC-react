import React from "react";
import { useLocation, useParams } from 'react-router-dom'
import { DetailContent, DetailPoster, DetailTitle } from './Program.style'

export default function MovieDetail() {
    //url로 넘겨 받은 title
    const { title } = useParams(); 
		
    //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
    //이미지, 별점 등의 모든 정보들
    const { state } = useLocation();

    return (
        <DetailContent>
            <DetailPoster src={`https://image.tmdb.org/t/p/w1280/${state.poster}`} alt={`${title} 포스터`} />
            <DetailTitle> {title} </DetailTitle>
        </DetailContent>
    );
};