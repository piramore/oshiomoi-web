import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setStorage } from "../../helpers/storage.helper";
import { userList } from "../../configs/user.config";
import { toast } from "react-toastify";
import { useAuthStore } from "../../stores/auth.storer";
import Brand from "../../components/Brand";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();
  const { register, handleSubmit } = useForm<{
    username: string;
    password: string;
  }>();

  useEffect(() => {
    if (user) navigate("/home");
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", position: "relative" }}
    >
      <Form
        onSubmit={handleSubmit((value) => {
          const user = userList.find((u) => u.username === value.username);
          if (!user) {
            toast("User not found", { type: "error" });
            return;
          }

          setStorage("user", user);
          setUser(user);
          toast(`Logged in as ${user.name}`, { type: "success" });
          navigate("/home");
        })}
      >
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <div style={{ marginBottom: 30 }}>
                <Brand />
            </div>
          </div>
          <div className="mb-3">
            <input
              {...register("username")}
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              {...register("password")}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}
