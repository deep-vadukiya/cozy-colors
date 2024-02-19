//
"use client";

import { useState } from "react";
// shadcn
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// utils
import { hexToHslObj, hexToRgbObj, rgbObjToRgbString } from "@/utils/utils";

// ----------------------------------------------

export default function Home() {
  const [userColorList, setUserColorList] = useState([
    { color: "#F6F6F6", textValue: "#F6F6F6" },
  ]);

  const handleAddMoreColor = () => {
    setUserColorList([
      ...userColorList,
      { color: "#F6F6F6", textValue: "#F6F6F6" },
    ]);
  };

  return (
    <main>
      <div className="container">
        <p className="mb-4">Home page</p>

        <div className="grid grid-cols-2 gap-2">
          {userColorList.map((col, index) => {
            return (
              <ColorComoponent
                color={col}
                userColorList={userColorList}
                setUserColorList={setUserColorList}
                index={index}
                key={`color-component-${index}`}
              />
            );
          })}
        </div>

        <div className="flex">
          <Button onClick={handleAddMoreColor}>Add more</Button>
        </div>
      </div>
    </main>
  );
}

const ColorComoponent = (props) => {
  const { color, userColorList, setUserColorList, index } = props;

  const handleInputChange = (event) => {
    const typeValue = event.target.value;
    const tempList = userColorList;

    tempList[index].textValue = typeValue.toUpperCase() ?? "#";

    setUserColorList([...tempList]);
  };

  console.log(hexToHslObj(color.textValue));

  return (
    <div className="flex rounded-md border gap-4 p-1 mb-2">
      <div
        className="w-28 h-28 rounded border flex justify-center items-center"
        style={{ backgroundColor: color.textValue }}
      >
        <small className="text-sm font-medium leading-none">
          Color Preview
        </small>
      </div>

      <div>
        <div className="flex justify-between items-center gap-1 rounded-md bg-white px-1">
          <div
            className="rounded-sm w-6 h-6"
            style={{ backgroundColor: color.textValue }}
          >
            <input
              type="color"
              value={color.textValue}
              onChange={handleInputChange}
              className="opacity-0 block border-0"
            />
          </div>
          <Input
            type="text"
            className="h-8"
            placeholder="#000000"
            value={color.textValue}
            onChange={handleInputChange}
            maxLength="7"
          />
        </div>

        <div>
          <div className="flex gap-2">
            <p>RGB: </p>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {rgbObjToRgbString(hexToRgbObj(color.textValue)) ?? "- - -"}
            </code>
          </div>

          <div className="flex gap-2">
            <p>HSL: </p>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {`hsl(${
                hexToHslObj(color.textValue).h +
                "," +
                hexToHslObj(color.textValue).s +
                "," +
                hexToHslObj(color.textValue).l
              })` ?? "- - -"}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
