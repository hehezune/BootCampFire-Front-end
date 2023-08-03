import styled from 'styled-components';
import { colors } from 'constant/constant';
import { Bold15px } from './Board/styled';

interface BtnProps {
  type?: string;
  children: string;
}

function LightBtn({ type = 'light', children }: BtnProps) {
  return <StyledBtn type={type}>{children}</StyledBtn>;
}

const StyledBtn = styled(Bold15px)<{ type: string }>`
  ${(props) =>
    props.type === 'first'
      ? `background-color: ${colors.SECONDARY};
        color: ${colors.WHITE};
        `
      : `background-color: ${colors.WHITE};
        color: ${colors.SECONDARY};
        border: 0.5px solid ${colors.BORDER_LIGHT};
        `};
  display: inline-flex;
  padding: 1px 13px 0px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  line-height: 25px;
`;

export default LightBtn;
