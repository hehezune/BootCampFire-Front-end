import ManagerPageHeader from 'components/Manager/ManagerHeader';
import { StyledPage } from 'pages/BoardPage/styledPage';
import { Outlet } from 'react-router-dom';

export default function ManagerPage() {
  return (
    <StyledPage>
      <ManagerPageHeader />
      <Outlet />
    </StyledPage>
  );
}
