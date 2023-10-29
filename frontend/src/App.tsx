import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SiginIn from "./pages/SiginIn";
import Settings from "./pages/Settings";
import ChangeHistory from "./pages/ChangeHistory";
import Wards from "./pages/Wards";
import Patients from "./pages/Patients";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/change-history":
        title = "";
        metaDescription = "";
        break;
      case "/wards":
        title = "";
        metaDescription = "";
        break;
      case "/patients":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SiginIn />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/change-history" element={<ChangeHistory />} />
      <Route path="/wards" element={<Wards />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
