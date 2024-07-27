import React from "react";
import PageContainer from "../../Layouts/PageContainer";
import { useNavigate } from "react-router-dom";
import { removeStorage } from "../../helpers/storage.helper";
import { toast } from "react-toastify";
import { useAuthStore } from "../../stores/auth.storer";
import Brand from "../../components/Brand";

export default function HomePage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  return (
    <PageContainer>
      <div className="d-flex justify-content-center">
        <Brand />
      </div>
      <div
        className="border-bottom"
        style={{ marginTop: 30, marginLeft: 30, marginRight: 30 }}
      ></div>
      <div className="text-center my-5">
        <span>Welcome back, </span>
        <span className="fw-bold">{user?.name}</span>
      </div>
      <div className="row g-3">
        <div className="col col-12">
          <HomeMenuItem
            label="Timeline"
            backgroundColor="var(--bs-primary)"
            onClick={() => navigate("/timeline")}
          />
        </div>
        <div className="col col-6">
          <HomeMenuItem
            label="Oshi"
            backgroundColor="var(--bs-warning)"
            onClick={() => navigate("/oshi")}
          />
        </div>
        <div className="col col-6">
          <HomeMenuItem label="Group" backgroundColor="var(--bs-success)" />
        </div>
        <div className="col col-12">
          <HomeMenuItem
            label="Logout"
            backgroundColor="var(--bs-danger)"
            height={40}
            onClick={() => {
              removeStorage("user");
              setUser(null);
              toast("Logged out", { type: "success" });
              navigate("/auth/login");
            }}
          />
        </div>
      </div>
    </PageContainer>
  );
}

function HomeMenuItem({
  label,
  backgroundColor,
  onClick,
  height = 100,
}: {
  label: string;
  backgroundColor: string;
  onClick?: () => void;
  height?: number;
}) {
  return (
    <div
      className="border rounded text-white p-3"
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor,
      }}
      onClick={onClick}
    >
      <div
        className="d-flex align-items-center justify-content-start"
        style={{ height }}
      >
        <div className="fw-bold" style={{ fontSize: "1.6rem" }}>
          {label}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          opacity: 0.1,
          zIndex: 10,
          right: -160,
          bottom: -30,
          width: 400,
          height: 60,
          transform: "rotate(-40deg)",
        }}
      ></div>
      {/* <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          opacity: 0.1,
          zIndex: 10,
          right: -120,
          bottom: -30,
          width: 400,
          height: 10,
          transform: "rotate(-40deg)",
        }}
      ></div> */}
    </div>
  );
}
