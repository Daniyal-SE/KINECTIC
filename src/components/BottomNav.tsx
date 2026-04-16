import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavProps {
  active?: "dashboard" | "analytics" | "history" | "settings";
}

const navItems = [
  {
    id: "dashboard" as const,
    icon: "speed",
    label: "DASHBOARD",
    path: "/dashboard",
  },
  {
    id: "analytics" as const,
    icon: "leaderboard",
    label: "ANALYTICS",
    path: "/analytics",
  },
  {
    id: "history" as const,
    icon: "history",
    label: "HISTORY",
    path: "/history",
  },
  {
    id: "settings" as const,
    icon: "settings",
    label: "SETTINGS",
    path: "/settings",
  },
];

const BottomNav = ({ active = "dashboard" }: BottomNavProps) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-kinetic-surface-container/60 backdrop-blur-xl z-50 rounded-t-[24px] shadow-[0_0_40px_rgba(11,19,38,0.06)]">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center justify-center px-5 py-2.5 transition-all duration-200 ${
            active === item.id
              ? "bg-gradient-to-br from-kinetic-primary to-kinetic-primary-container text-white rounded-[24px]"
              : "text-kinetic-on-surface-variant hover:text-kinetic-on-surface"
          }`}
        >
          <span
            className={`material-symbols-outlined mb-1 ${active === item.id ? "material-filled" : ""}`}
          >
            {item.icon}
          </span>
          <span className="font-body font-bold text-[10px] tracking-wider">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
