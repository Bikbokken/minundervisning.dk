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
  if (angleA > 90) {
    console.log("ACTUALLY HERE");
    let ps = Math.sqrt(sideA * sideA - height * height) / 500;
    let pg = height / ps;
    let p1 = sideC / ps;
    let p2 = Math.sqrt(sideA * sideA - height * height) / ps;
    viewbox = "0 0 500 " + pg;
    path = "M500 " + pg + " L" + (p2 - p1) + " " + pg + " L0 0" + " Z";
  } else if (angleB <= 90 && angleA <= 90) {
    console.log("NO HERE");
    let ps = sideC / 500;
    let pg = height / ps;
    let p1 = sideC / ps;
    let p2 = Math.sqrt(sideB * sideB - height * height) / ps;
    viewbox = "0 0 500 " + pg;
    console.log(sideB * sideB - height * height);
    path = "M0 " + pg + " L" + p1 + " " + pg + " L" + p2 + " 0" + " Z";
  } else if (angleB > 90) {
    console.log("HERE");
    let ps = Math.sqrt(sideB * sideB - height * height) / 500;
    let pg = height / ps;
    let p1 = sideC / ps;
    let p2 = Math.sqrt(sideB * sideB - height * height) / ps;
    viewbox = "0 0 500 " + pg;
    path = "M0 " + pg + " L" + p1 + " " + pg + " L" + p2 + " 0" + " Z";
  }

  return (
    <svg viewBox={viewbox} className="mb-6">
      <path d={path} stroke="white" fill="transparent" />
    </svg>
  );
};

export default TriangleSVG;
