import React from "react";

export default function Brand() {
  return (
    <div style={{ width: 160 }}>
      <div className="fw-bold mb-1" style={{ fontSize: "2rem" }}>
        <span>OSH</span>
        <span className="text-primary">i</span>
        <span>OMO</span>
        <span className="text-primary">i</span>
      </div>
      <div className="text-end text-muted" style={{ fontSize: ".8rem" }}>
        <span className="text-primary">推</span>
        <span>し</span>
        <span className="text-primary">思</span>
        <span>い</span>
      </div>
    </div>
  );
}
