import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import DashboardCreate from "./pages/DashboardCreate";
import CreateProfile from "./pages/CreateProfile";
import Developers from "./pages/Developers";
import Posts from "./pages/Posts";
import Exprence from "./pages/Exprence";
import Education from "./pages/Education";
import Viewprofile from "./pages/Viewprofile";
import Notfound from "./pages/Notfound";
import Loading from "./pages/Loading";
import Post_user from "./pages/Post_user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/siginup" element={<Signup />} />
      <Route path="/siginin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboardcreate" element={<DashboardCreate />} />
      <Route path="/createprofile" element={<CreateProfile />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/exprence" element={<Exprence />} />
      <Route path="/education" element={<Education />} />
      <Route path="/viewprofile/:id" element={<Viewprofile />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/postuser" element={<Post_user />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
