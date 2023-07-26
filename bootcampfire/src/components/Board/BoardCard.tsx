import React from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import A2 from './Tag';
import type {Board} from './interface';
import { Bold18px, Bold15px ,Normal15px, Normal13px } from './Styled';


function BoardCard(props: {data: Board}) { 
    return (
        <div>
            <Bold18px>{props.data.title}</Bold18px>
            <Normal15px>{props.data.content}</Normal15px>
            <div>
                <span>
                    <span>
                        <RemoveRedEyeOutlinedIcon sx={{fontSize:13}}/>
                        <Normal13px as="span">{String(props.data.views)}</Normal13px>
                    </span>
                    <span>
                        <StarBorderOutlinedIcon sx={{fontSize:13}}/>
                        <Normal13px as="span">{String(props.data.likes)}</Normal13px>
                    </span>
                    <span>
                        <ModeCommentOutlinedIcon sx={{fontSize:13}}/>
                        <Normal13px as="span">{String(props.data.comments)}</Normal13px>
                    </span>
                    <span>
                        <AccessTimeOutlinedIcon sx={{fontSize:13}}/>
                        <Normal13px as="span">{String(props.data.date)}</Normal13px>
                    </span>
                </span>

                <span>
                    <A2 text={props.data.camp} color="#F5A368"/>
                    <Bold15px as="span">{props.data.writer}</Bold15px>
                </span>
            </div>
        </div>
    )
}
export default BoardCard;
