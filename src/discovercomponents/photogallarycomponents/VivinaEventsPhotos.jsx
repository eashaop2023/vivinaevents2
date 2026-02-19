import { Outlet } from "react-router-dom";
import PhotoNavbar from "./PhotoNavbar";

const VivinaEventsPhotos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
      <PhotoNavbar />
      <Outlet />
    </div>
  );
};

export default VivinaEventsPhotos;