import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HotContentContainer = styled(Link)`
  margin: 0 50px; /* 여기에 간격을 조절할 수 있습니다 */
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface ContentProps {
  text: string;
  link: string;
}

const HotContent: React.FC<ContentProps> = ({ text, link }) => {
  return (
    <div>
      <HotContentContainer to={link}>{text}</HotContentContainer>
    </div>
  );
};

export default HotContent;
