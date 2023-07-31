import React from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import A2 from '../Tag';
import type {Board} from '../interface';
import { Bold18px, Bold15px ,Normal15px, Normal13px } from '../styled';
import styled from 'styled-components';
import DateInfo from './DateInfo';

interface BoardDate {
    views: number;
    likes: number;
    comments: number;
    date: string;
}

function BoardCard({data, onClick}: {data: Board, onClick: () => void}){
    const dataForDateInfo: BoardDate = {
        views: data.views,
        likes: data.likes,
        comments: data.comments,
        date: data.date,
    }
    
    return (
        <StyledBoardCard>
            <Bold18px className="position1px">{data.title}</Bold18px>
            <Normal15px className="position40px">{data.content}</Normal15px>
            <Infodiv className="position110px">
                <DateInfo data={dataForDateInfo}/>

                <WriterSpan>
                    {/* <A2 text={data.camp} color="#F5A368"/> */}
                    <A2>{data.camp}</A2>
                    <Bold15px as="span">{data.writer}</Bold15px>
                </WriterSpan>
            </Infodiv>
        </StyledBoardCard>
    )
}

const StyledBoardCard = styled.div`
    position: relative;
    border-bottom: solid;
    border-width: 1px;
    min-width: 800px;
    max-width: 1040px;
    height: 138px;

    .position1px {
        position: absolute;
        top: 1px;
    }

    .position40px {
        position: absolute;
        top: 40px;
    }

    .position110px {
        position: absolute;
        top: 110px;
    }

    .infoMargin {
        margin: 0px 10px;
    }

    .hegiht-center {
        display: flex;
        align-items: center;

    }
`

const Infodiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const WriterSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`

export default BoardCard;
