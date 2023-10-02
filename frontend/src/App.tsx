import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Wards from "./pages/Wards";
import Patients from "./pages/Patients";
import Settings from "./pages/Settings";
import ChangeHistory from "./pages/ChangeHistory";
import Notifications from "./pages/Notifications";
import Statistics from "./pages/Statistics";
import { useEffect } from "react";

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
      case "/wards":
        title = "";
        metaDescription = "";
        break;
      case "/patients":
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
      case "/notifications":
        title = "";
        metaDescription = "";
        break;
      case "/statistics":
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
      <Route path="/" element={<Home />} />
      <Route path="/wards" element={<Wards />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/change-history" element={<ChangeHistory />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
}
export default App;
