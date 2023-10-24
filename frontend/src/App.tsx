import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import SiginIn from "./pages/SiginIn";
import ChangeHistory from "./pages/ChangeHistory";
import Wards from "./pages/Wards";
import Patients from "./pages/Patients";
import Notifications from "./pages/Notifications";
import Statistics from "./pages/Statistics";

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
        title = "Overview";
        metaDescription = "";
        break;
      case "/settings":
        title = "Settings";
        metaDescription = "";
        break;
      case "/siginin":
        title = "Sign In";
        metaDescription = "";
        break;
      case "/change-history":
        title = "Change History";
        metaDescription = "";
        break;
      case "/wards":
        title = "Wards";
        metaDescription = "";
        break;
      case "/patients":
        title = "Patients";
        metaDescription = "";
        break;
      case "/notifications":
        title = "Notifications";
        metaDescription = "";
        break;
      case "/statistics":
        title = "Statistics";
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
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/siginin" element={<SiginIn />} />
      <Route path="/change-history" element={<ChangeHistory />} />
      <Route path="/wards" element={<Wards />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
}
export default App;
