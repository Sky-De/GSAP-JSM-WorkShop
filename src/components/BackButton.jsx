import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <button
      className={`m-4 ${pathname === "/" ? "hidden" : ""}`}
      onClick={handleBack}
    >
      Back
    </button>
  );
};

export default BackButton;
