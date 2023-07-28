import styled from 'styled-components';
import {Bold15px, Bold24px, Normal15px, Normal13px } from '../styled';
import DateInfo from '../BoardList/DateInfo';
import A2 from '../Tag';
import type {Board} from '../interface';

interface BoardDate {
    views: number;
    likes: number;
    comments: number;
    date: string;
}

let dummy1 : BoardDate = {
    views: 3,
    likes: 4,
    comments: 5,
    date: "20171717"
}

let dummy2 : Board = {
    boardId: 1,
    title: "testTitle testContent testContent testContent",
    content: "testContent testContent testContent ",
    date: "20230725",
    likes: 3,
    comments: 3,
    views: 3,
    writer: "beom0109",
    camp: "SSAFY"
}

function BoardDetailBody() {
    return (
        <>
        <div>
            
            <Bold15px>카테고리명</Bold15px>
            <Bold24px>글 제목</Bold24px>
            <div>
                <Normal15px as="span">{dummy2.writer}</Normal15px>
                <A2 text={dummy2.camp} color="#F5A368"/>
            </div>
            <DateInfo data={dummy1}></DateInfo>
        </div>
        <div>
            <Normal15px>contents</Normal15px>
            <div>

            아이콘 좋아요 하트쓰자
            </div>
        </div>
        </>
    )
}

export default BoardDetailBody;