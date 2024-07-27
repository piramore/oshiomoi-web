import React, { useMemo, useState } from "react";
import { groupList } from "../../configs/group.config";
import { useNavigate } from "react-router-dom";
import { oshiList } from "../../configs/oshi.config";
import PageContainer from "../../Layouts/PageContainer";

export default function OshiPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [oshis, setOshis] = useState(oshiList);

  const aggregatedOshis = useMemo(
    () =>
      oshis.map((o) => ({
        ...o,
        group: groupList.find((g) => g.id === o.groupId),
      })),
    [oshis]
  );

  return (
    <div>
      <PageContainer>
        <div className="d-flex align-items-center mb-3" style={{ gap: 10 }}>
          <div style={{ flexGrow: 1 }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div style={{ flexShrink: 0 }}>
            <button className="btn btn-primary">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        {aggregatedOshis
          .filter((o) => {
            if (!search) return true;
            const lowerCased = search.toLocaleLowerCase();
            return (
              o.name.toLowerCase().includes(lowerCased) ||
              o.nickname?.includes(lowerCased) ||
              o.twitter.includes(lowerCased) ||
              o.instagram.includes(lowerCased) ||
              o.tiktok.includes(lowerCased)
            );
          })
          .map((oshi, i) => (
            <div
              key={i}
              className="rounded bg-white border p-3 mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(oshi.id)}
            >
              <div className="d-flex align-items-center" style={{ gap: 10 }}>
                <img
                  src={
                    oshi.image ||
                    "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
                  }
                  alt=""
                  className="rounded"
                  style={{ width: 40, height: 40 }}
                />
                <div>
                  <div className="fw-bold mb-1">{oshi.name}</div>
                  <div className="text-muted" style={{ fontSize: ".8rem" }}>
                    {oshi.group?.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </PageContainer>
    </div>
  );
}
