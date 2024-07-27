import React, { useMemo } from "react";
import { matchPath, Outlet, useLocation, useNavigate } from "react-router-dom";
import { menuList } from "../configs/menu.config";
import { IMenu } from "../interfaces/menu.interface";

export default function MobileLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menu = useMemo(() => {
    const checkMenu = (menu: IMenu): IMenu | undefined => {
      if (!!menu.children.length) {
        for (let child of menu.children) {
          const checked = checkMenu(child);
          if (!!checked) return checked;
        }
      }

      const checked = matchPath(menu.fullPath, pathname);
      if (!!checked) return menu;
    };

    for (let menu of menuList) {
      const checked = checkMenu(menu);
      if (!!checked) return checked;
    }
  }, [pathname]);

  return (
    <div className="bg-light">
      <div
        className="bg-white mx-auto border-start border-end"
        style={{ maxWidth: 480, minHeight: "100vh", overflowX: "hidden" }}
      >
        {!pathname.startsWith("/auth") && !pathname.startsWith("/home") && (
          <div className="bg-light border-bottom px-4 py-3">
            <div className="d-flex align-items-center" style={{ gap: 30 }}>
              {pathname !== "/home" && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/home")}
                >
                  <i className="fa fa-chevron-left"></i>
                </div>
              )}
              <div>
                <div className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>
                  {menu?.name}
                </div>
                {/* <div className="text-muted" style={{ fontSize: ".8rem" }}>
                推し
              </div> */}
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
