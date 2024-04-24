import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className="bg-black min-h-screen w-full py-8">
      {pathname !== "/" && (
        <button className="m-4" onClick={handleBack}>
          Back
        </button>
      )}
      <Routes>
        <Route path="/gsapto" element={<GsapTo />} />
        <Route path="/gsapfrom" element={<GsapFrom />} />
        <Route path="/gsapfromto" element={<GsapFromTo />} />
        <Route path="/gsaptimeline" element={<GsapTimeline />} />
        <Route path="/gsapstagger" element={<GsapStagger />} />
        <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
        <Route path="/gsaptext" element={<GsapText />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
