import VsHeader from 'components/VSGame/VsHeader';
import { StyledPage } from 'pages/BoardPage/styledPage';
import { Outlet } from 'react-router-dom';

export default function VsPage() {
  return (
    <StyledPage>
      <VsHeader />
      <Outlet />
    </StyledPage>
  );
}
