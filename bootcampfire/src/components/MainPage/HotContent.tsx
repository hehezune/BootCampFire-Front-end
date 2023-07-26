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
  children?: React.ReactNode; // Add 'children' prop to ContentProps
}

const HotContent: React.FC<ContentProps> = ({ text, link, children }) => {
  return (
    <div>
      <HotContentContainer to={link}>{children || text}</HotContentContainer>
    </div>
  );
};

export default HotContent;
