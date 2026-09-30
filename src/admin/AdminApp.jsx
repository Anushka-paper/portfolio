import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "#admin/ProtectedRoute.jsx";
import AdminLayout from "#admin/AdminLayout.jsx";
import Login from "#admin/pages/Login.jsx";
import GalleryAdmin from "#admin/pages/GalleryAdmin.jsx";
import BlogAdmin from "#admin/pages/BlogAdmin.jsx";
import SocialsAdmin from "#admin/pages/SocialsAdmin.jsx";
import TechStackAdmin from "#admin/pages/TechStackAdmin.jsx";
import PhotosLinksAdmin from "#admin/pages/PhotosLinksAdmin.jsx";
import ProjectsAdmin from "#admin/pages/ProjectsAdmin.jsx";
import AboutAdmin from "#admin/pages/AboutAdmin.jsx";
import ResumeAdmin from "#admin/pages/ResumeAdmin.jsx";

const AdminApp = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route
      element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Navigate to="gallery" replace />} />
      <Route path="gallery" element={<GalleryAdmin />} />
      <Route path="blog" element={<BlogAdmin />} />
      <Route path="socials" element={<SocialsAdmin />} />
      <Route path="tech-stack" element={<TechStackAdmin />} />
      <Route path="photos-links" element={<PhotosLinksAdmin />} />
      <Route path="projects" element={<ProjectsAdmin />} />
      <Route path="about" element={<AboutAdmin />} />
      <Route path="resume" element={<ResumeAdmin />} />
    </Route>
  </Routes>
);

export default AdminApp;
