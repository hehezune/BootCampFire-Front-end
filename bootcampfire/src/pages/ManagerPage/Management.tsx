import { Bold18px } from 'components/Board/styled';
import ManageTable from 'components/Manager/ManageTable';

export default function Managements() {
  return (
    <div>
      <Bold18px style={{ marginTop: '20px', marginBottom: '20px' }}>부트캠프 등록하기</Bold18px>
      <ManageTable></ManageTable>
    </div>
  );
}
