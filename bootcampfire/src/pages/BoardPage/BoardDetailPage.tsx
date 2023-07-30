import Comments from 'components/Board/BoardDetail/Comments';
import BoardDetailBody from 'components/Board/BoardDetail/BoardDetailBody';
import { StyledPage } from './styledPage';




function BoardDetailPage() {
  // 오픈시 요청해서 기본 정보 받아오기
  
  return (
    <StyledPage>
      <BoardDetailBody />
      <Comments />
    </StyledPage>
  );
}



export default BoardDetailPage;