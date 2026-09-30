import { NavLink, Outlet, useNavigate } from "react-router-dom";
import clsx from "clsx";
import useAuthStore from "#store/auth";

const NAV_ITEMS = [
  { to: "/admin/gallery", label: "Gallery" },
  { to: "/admin/blog", label: "Blog Posts" },
  { to: "/admin/socials", label: "Socials" },
  { to: "/admin/tech-stack", label: "Tech Stack" },
  { to: "/admin/photos-links", label: "Photos Links" },
  { to: "/admin/projects", label: "Projects" },
  { to: "/admin/about", label: "About" },
  { to: "/admin/resume", label: "Resume" },
];

const AdminLayout = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-56 shrink-0 bg-white border-r p-4 space-y-1">
        <h1 className="font-semibold text-lg mb-4">Admin</h1>
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                "block rounded px-3 py-2 text-sm",
                isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
              )
            }
          >
            {label}
          </NavLink>
        ))}
        <button
          onClick={() => {
            logout();
            navigate("/admin/login", { replace: true });
          }}
          className="block w-full text-left rounded px-3 py-2 text-sm text-red-600 hover:bg-red-50 mt-4"
        >
          Log out
        </button>
        <a href="/" className="block rounded px-3 py-2 text-sm text-gray-500 hover:bg-gray-100">
          ← Back to site
        </a>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
