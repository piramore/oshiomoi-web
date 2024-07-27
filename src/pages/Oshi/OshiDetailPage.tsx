import React, { useMemo } from "react";
import PageContainer from "../../Layouts/PageContainer";
import { useParams } from "react-router-dom";
import { oshiList } from "../../configs/oshi.config";
import { groupList } from "../../configs/group.config";

export default function OshiDetailPage() {
  const { id } = useParams();
  const oshi = useMemo(() => oshiList.find((o) => o.id === id), [id]);
  const group = useMemo(
    () => groupList.find((g) => g.id === oshi?.groupId),
    [oshi]
  );

  return (
    <PageContainer>
      {!!oshi ? (
        <>
          <div className="mb-3">
            <img
              src={
                oshi?.image ||
                "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
              }
              alt=""
              className="w-100 rounded border"
            />
          </div>
          <div className="rounded border">
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{oshi?.name}</td>
                </tr>
                <tr>
                  <th>Group</th>
                  <td>{group?.name}</td>
                </tr>
                <tr>
                  <th>Twitter</th>
                  <td>
                    {!!oshi?.twitter.length ? (
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: 10, flexWrap: "wrap" }}
                      >
                        {oshi?.twitter.map((t, i) => (
                          <div
                            key={i}
                            className="rounded text-primary fw-bold px-2 py-1"
                            style={{
                              backgroundColor:
                                "rgba(var(--bs-primary-rgb), 0.1)",
                              fontSize: ".9rem",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(`https://twitter.com/${t}`, "_blank")
                            }
                          >
                            @{t}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>-</>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Instagram</th>
                  <td>
                    {!!oshi?.instagram.length ? (
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: 10, flexWrap: "wrap" }}
                      >
                        {oshi?.instagram.map((i, idx) => (
                          <div
                            key={idx}
                            className="rounded text-primary fw-bold px-2 py-1"
                            style={{
                              backgroundColor:
                                "rgba(var(--bs-primary-rgb), 0.1)",
                              fontSize: ".9rem",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                `https://instagram.com/${i}`,
                                "_blank"
                              )
                            }
                          >
                            @{i}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>-</>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Tiktok</th>
                  <td>
                    {!!oshi?.tiktok.length ? (
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: 10, flexWrap: "wrap" }}
                      >
                        {oshi?.tiktok.map((i, idx) => (
                          <div
                            key={idx}
                            className="rounded text-primary fw-bold px-2 py-1"
                            style={{
                              backgroundColor:
                                "rgba(var(--bs-primary-rgb), 0.1)",
                              fontSize: ".9rem",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(`https://tiktok.com/@${i}`, "_blank")
                            }
                          >
                            @{i}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>-</>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: 400 }}
        >
          <div className="text-muted text-center fw-bold">
            <div className="mb-1" style={{ fontSize: "5rem" }}>
              404
            </div>
            <div style={{ fontSize: "1.5rem" }}>Oshi Not Found</div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
