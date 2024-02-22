"use client";

import { TriangleCalculate } from "@/lib/TriangleCalculatorVilkaarlig.js";
import { useReducer } from "react";
import TriangleSVG from "../components/TriangleCanvasVilkaarlig";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "ERROR":
      return {
        ...state,
        error: action.value,
      };

    case "UPDATE_RESULT":
      return action.value;

    case "RESET":
      return intialState;

    default:
      return state;
  }
};

const intialState = {
  a: "",
  b: "",
  c: "",
  A: "",
  B: "",
  C: "",
  error: null,
};

export default function Vilkaarlig() {
  const [formState, dispatch] = useReducer(reducer, intialState);
  const { error, ...values } = formState;

  const handleTextChange = (e: any) => {
    dispatch({
      type: "HANDLE_INPUT",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    try {
      const result = TriangleCalculate(values);
      console.log(result);
      dispatch({ type: "UPDATE_RESULT", value: result });
    } catch (error: any) {
      dispatch({ type: "ERROR", value: error.message });
    }
    console.log("Submitted");
  };

  return (
    <main className="bg-slate-900 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-slate-800 p-8 rounded-md">
          <p className="font-bold">Udregninger</p>
          {values.a &&
            values.b &&
            values.c &&
            values.A &&
            values.B &&
            values.C && (
              <TriangleSVG
                angleA={values.A}
                angleB={values.B}
                angleC={values.C}
                sideA={values.a}
                sideB={values.b}
                sideC={values.c}
                height={values.h}
              />
            )}

          <div>
            {formState.messages && (
              <>
                {formState.messages.map((str: any, index: any) => (
                  <div className="mb-6" key={index}>
                    {str.split("\n").map((line: any, i: any) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="bg-slate-800 p-8 rounded-md">
          <p className="font-bold text-xl mb-2">Vilkårlig Trekant</p>
          <form className="space-y-2" onSubmit={onSubmit}>
            {error && <p className="text-red-400">{error}</p>}
            <div>
              <label className="mr-2">(a) længde:</label>
              <input
                className="bg-slate-700 p-2 rounded-md"
                type="number"
                name="a"
                placeholder="a"
                value={formState.a}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div>
              <label className="mr-2">(b) længde:</label>
              <input
                className="bg-slate-700 p-2 rounded-md"
                type="number"
                name="b"
                placeholder="b"
                value={formState.b}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div>
              <label className="mr-2">(c) længde:</label>
              <input
                className="bg-slate-700 p-2 rounded-md"
                type="number"
                name="c"
                placeholder="c"
                value={formState.c}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div>
              <label className="mr-2">(A) vinkel:</label>
              <input
                className="bg-slate-700 p-2 rounded-md"
                type="number"
                name="A"
                placeholder="A"
                value={formState.A}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div>
              <label className="mr-2">(B) vinkel:</label>
              <input
                className="bg-slate-700 p-2 rounded-md"
                type="number"
                name="B"
                placeholder="B"
                value={formState.B}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div>
              <label className="mr-2">(C) vinkel:</label>
              <input
                className="bg-slate-700 p-2 rounded-md"
                type="number"
                name="C"
                placeholder="C"
                value={formState.C}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md"
              type="submit"
            >
              Udregn
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md"
              type="button"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Ryd
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
