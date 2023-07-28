import Comments from 'components/Board/BoardDetail/Comments';
import BoardDetailBody from 'components/Board/BoardDetail/BoardDetailBody';





function BoardDetailPage() {
  // 오픈시 요청해서 기본 정보 받아오기
  
  return (
    <>
      <BoardDetailBody />
      <Comments />
    </>
  );
}

export default BoardDetailPage;