import { toRadians } from "@/lib/common";
import React from "react";

interface TriangleProps {
  angleA: number;
  angleB: number;
  angleC: number;
  sideA: number;
  sideB: number;
  sideC: number;
  height: number;
}

const TriangleSVG: React.FC<TriangleProps> = ({
  angleA,
  angleB,
  angleC,
  sideA,
  sideB,
  sideC,
  height,
}) => {
  let viewbox = "";
  let path = "";
  let ps;
  let pg = 0;
  let p1 = 0;
  let p2 = 0;
  let direction;
  if (angleA > 90) {
    ps = Math.sqrt(sideA * sideA - height * height) / 500;
    pg = height / ps;
    p1 = sideC / ps;
    p2 = Math.sqrt(sideA * sideA - height * height) / ps;
    viewbox = "0 0 500 " + pg;
    path = "M500 " + pg + " L" + (p2 - p1) + " " + pg + " L0 0" + " Z";
    direction = "left";
  } else if (angleB <= 90 && angleA <= 90) {
    ps = sideC / 500;
    pg = height / ps;
    p1 = sideC / ps;
    p2 = Math.sqrt(sideB * sideB - height * height) / ps;
    viewbox = "0 0 500 " + pg;
    path = "M0 " + pg + " L" + p1 + " " + pg + " L" + p2 + " 0" + " Z";
    direction = "";
  } else if (angleB > 90) {
    ps = Math.sqrt(sideB * sideB - height * height) / 500;
    pg = height / ps;
    p1 = sideC / ps;
    p2 = Math.sqrt(sideB * sideB - height * height) / ps;
    viewbox = "0 0 500 " + pg;
    path = "M0 " + pg + " L" + p1 + " " + pg + " L" + p2 + " 0" + " Z";
    direction = "right";
  }
  // letters:

  let A, B, C, a, b, c;
  if (p1 !== null && p2 !== null && direction !== null) {
    let placementA = 20 / Math.tan(toRadians(angleA));
    let placementB = 30 / Math.tan(toRadians(angleB)) + 10;

    if (direction === "left") {
      A = p2 - p1;
      C = 10;
      B = 490;
      a = p2 / 2;
      b = (p2 - p1) / 2 - 10;
      c = p2 - p1 + (p1 - p2 / 2);
    } else {
      a = p1 - (p1 - p2) / 2 + 10;
      b = p2 / 2 - 10;
      c = p1 / 2;
      if (placementA > 40) A = 5;
      else A = placementA;
      if (placementB > 50) B = p1 - 10;
      else B = p1 - placementB;
      if (direction === "right") C = p2 - 40;
      else C = p2 - 5;
    }
  }

  return (
    <svg viewBox={viewbox} className="mb-6">
      <path d={path} stroke="white" fill="transparent" />
      <text id="text-A" x={A} y={pg - 10} fill="white">
        A ({angleA}°)
      </text>
      <text id="text-B" x={B} y={pg - 10} fill="white">
        B ({angleB}°)
      </text>
      <text id="text-C" x={C} y={20} fill="white">
        C ({angleC}°)
      </text>
      <text id="text-a" x={a} y={pg / 2} fill="white">
        a ({sideA})
      </text>
      <text id="text-b" x={b} y={pg / 2} fill="white">
        b ({sideB})
      </text>
      <text id="text-c" x={c} y={pg - 5} fill="white">
        c ({sideC})
      </text>
    </svg>
  );
};

export default TriangleSVG;
