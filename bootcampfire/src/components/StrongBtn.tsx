import styled from "styled-components";
// primary , secondary, light에 따라 다르게
import { Bold18px } from "./Board/styled";
import { colors } from "constant/constant";
import CreateIcon from '@mui/icons-material/Create';
interface BtnProps {
    type?: string;
    hasIcon?: boolean;
    children: string;
}

function StrongBtn({type = "light", hasIcon = false, children}: BtnProps) {

    return (
        <StyledBtn type={type}>
            {children}
            {hasIcon && type === "first" &&
            <CreateIcon sx={{color: colors.WHITE}}/>}
            {hasIcon && type !== "first" &&
            <CreateIcon sx={{color: colors.PRIMARY}}/>}
        </StyledBtn>
    )
}

const StyledBtn = styled(Bold18px)<{type: string}>`

    ${(props) => props.type === "first" ?
        `background-color: ${colors.PRIMARY};
        color: ${colors.WHITE};
        ` :
        `background-color: ${colors.WHITE};
        color: ${colors.PRIMARY};
        border: 1px solid ${colors.PRIMARY};
        `
    };
    /* background-color: ${colors.PRIMARY}; */
    display: inline-flex;
    padding: 2px 30px 0px 30px;
    justify-content: center;
    align-items: center;
    /* gap: 18px; */
    border-radius: 10px;
    gap: 10px;
    height: 38px;
`;

export default StrongBtn;
