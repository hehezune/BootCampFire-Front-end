import axios from 'axios';
import ManageCard from 'components/Manager/ManageCard';

function createData(img: string, nickname: string, bootcamp: string) {
  return { img, nickname, bootcamp };
}
export default function Regist() {
  // const userList = [
  //   createData('/logo512', '김민범', 'SSAFY'),
  //   createData('/logo512', '김봉준', 'SSAFY'),
  //   createData('/logo512', '박지환', 'SSAFY'),
  //   createData('/logo512', '안나', 'SSAFY'),
  //   createData('/logo512', '이연희', 'SSAFY'),
  //   createData('/logo512', '임수형', 'SSAFY'),
  //   createData('/logo512', '김민범', 'SOMA'),
  //   createData('/logo512', '김민범', '우테코'),
  // ];

  // const userList =
  // console.log('?');
  let exList: any[] = [];
  axios.get('http://localhost:8080/users/admin/permission/list').then((res) => {
    exList = res.data.data;
    console.log(exList);
  });

  // const userList = [
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '김민범', bootcamp: 'SSAFY' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '김봉준', bootcamp: 'SSAFY' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '박지환', bootcamp: 'SSAFY' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '안나', bootcamp: 'SSAFY' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '이연희', bootcamp: 'SSAFY' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '임수형', bootcamp: 'SSAFY' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '김민범', bootcamp: 'SOMA' },
  //   { email: 'beom0109@naver.com', img: '/logo512.png', nickname: '김민범', bootcamp: '우테코' },
  // ];
  return (
    <div style={{ height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          gap: 70,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {exList.map((row) => (
          <ManageCard email={row.email} img={row.img} nickname={row.nickname} bootcamp={row.bootcamp}></ManageCard>
        ))}
      </div>
    </div>
  );
}
