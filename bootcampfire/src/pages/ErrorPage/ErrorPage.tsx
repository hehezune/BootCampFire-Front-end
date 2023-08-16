import { LightBtn } from "components/Board/styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";

const ErrorPage = () => {
  const navigate = useNavigate();
  const errorMsg = useSelector((state: RootState) => state.error.errorMsg);
  const msg = useSelector((state: RootState) => state.error.msg);
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>{errorMsg}</h1>
      <h1>{msg}</h1>
      <LightBtn type="first" onClick={back}>
        뒤로갑니다
      </LightBtn>
    </div>
  );
};

export default ErrorPage;
