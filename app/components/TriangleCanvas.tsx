import React from "react";

interface TriangleProps {
  angleA: number;
  angleB: number;
  angleC: number;
  sideA: number;
  sideB: number;
  sideC: number;
}

const TriangleSVG: React.FC<TriangleProps> = ({
  angleA,
  angleB,
  angleC,
  sideA,
  sideB,
  sideC,
}) => {
  const scale = sideA / 500;
  const height = sideB / scale; // +40
  const p1 = sideA / scale;
  const p2 = 25;

  const viewbox = "0 0 500 " + height;
  const path =
    "M25 " +
    (height - 20) +
    " L" +
    (p1 - 25) +
    " " +
    (height - 20) +
    " L" +
    p2 +
    " 20" +
    " Z";

  // letters:
  const a = p1 / 2 + 10;
  const b = p2 / 2 - 10;
  const c = p1 / 2 + 10;
  const B = p1 - 10;
  const C = 0;
  const A = 0;

  return (
    <svg viewBox={viewbox} className="mb-6">
      <path d={path} stroke="white" fill="transparent" />
      <text id="text-A" x={A} y="20" fill="white">
        A ({angleA}°)
      </text>
      <text id="text-B" x={B} y={height} fill="white">
        B ({angleB}°)
      </text>
      <text id="text-C" x={C} y={height} fill="white">
        C ({angleC}°)
      </text>
      <text id="text-a" x={a} y={height} fill="white">
        a ({sideA})
      </text>
      <text id="text-b" x={b} y={height / 2} fill="white">
        b ({sideB})
      </text>
      <text id="text-c" x={c} y={height / 2} fill="white">
        c ({sideC})
      </text>
    </svg>
  );
};

export default TriangleSVG;
