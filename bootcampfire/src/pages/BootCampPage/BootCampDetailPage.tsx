

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BootCampListDetailPage: React.FC = () => {
  const { bootcampid } = useParams(); 

  return (
    <>
      <h1>BootCamp Detail Page for BootCamp ID: {bootcampid}</h1>
      <Link to="/BootCamp">Go Back to List</Link> {/* Example back link */}
    </>
  );
};

export default BootCampListDetailPage;


