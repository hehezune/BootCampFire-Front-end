import { Bold18px, StrongBtn } from "components/Board/styled";
import ManageTable from "components/Manager/ManageTable";
import { useNavigate } from "react-router-dom";

export default function Managements() {
  const navigate = useNavigate();
  const openManageCreate = () => {
    navigate(":bootcampid");
  };
  return (
    <div>
      <Bold18px style={{ marginTop: "20px", marginBottom: "20px" }}>
        부트캠프 등록하기
      </Bold18px>
      <ManageTable></ManageTable>
      <StrongBtn type="first" onClick={openManageCreate}>
        수정하기
      </StrongBtn>
    </div>
  );
}
