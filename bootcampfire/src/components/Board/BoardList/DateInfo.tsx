import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Normal13px} from '../styled';
import styled from 'styled-components';

interface BoardDate {
    views: number;
    likes: number;
    comments: number;
    date: string;
}

function DateInfo(props: {data: BoardDate}) {
    return (
        <StyledInfoDiv>
            <span className="infoMargin">
                <RemoveRedEyeOutlinedIcon sx={{fontSize:13}}/>
                <Normal13px as="span" className="infoMargin">{String(props.data.views)}</Normal13px>
            </span>
            <span className="infoMargin">
                <FavoriteBorderIcon sx={{fontSize:13}}/>
                <Normal13px as="span" className="infoMargin">{String(props.data.likes)}</Normal13px>
            </span>
            <span className="infoMargin">
                <ModeCommentOutlinedIcon sx={{fontSize:13}}/>
                <Normal13px as="span" className="infoMargin">{String(props.data.comments)}</Normal13px>
            </span>
            <span className="infoMargin">
                <AccessTimeOutlinedIcon sx={{fontSize:13}}/>
                <Normal13px as="span" className="infoMargin">{String(props.data.date)}</Normal13px>
            </span>
        </StyledInfoDiv>
    )
}

const StyledInfoDiv = styled.span`
    .infoMargin {
        margin: 0px 5px;
    }

    display: flex;
    align-items: center;
`

export default DateInfo;