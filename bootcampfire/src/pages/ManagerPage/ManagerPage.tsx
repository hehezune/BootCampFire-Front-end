import ManagerPageHeader from 'components/Manager/ManagerHeader';
import { Outlet } from 'react-router-dom';

export default function ManagerPage() {
  return (
    <div>
      <ManagerPageHeader />
      <Outlet />
    </div>
  );
}
