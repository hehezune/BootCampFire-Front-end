import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HotContentContainer = styled(Link)`
  margin: 0 50px; /* 여기에 간격을 조절할 수 있습니다 */
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default HotContentContainer;
