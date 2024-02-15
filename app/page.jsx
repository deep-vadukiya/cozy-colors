//
"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const colors = [
  {
    code: "f5eee6fff8e3f3d7cae6a4b4",
    likes: "5613",
    date: "4 weeks",
  },
  {
    code: "e1f0dad4e7c5bfd8af99bc85",
    likes: "3528",
    date: "3 weeks",
  },
  {
    code: "294b2950623a789461dbe7c9",
    likes: "2851",
    date: "3 weeks",
  },
  {
    code: "561c246d2932c7b7a3e8d8c4",
    likes: "2469",
    date: "3 weeks",
  },
  {
    code: "12372a436850adbc9ffbfada",
    likes: "2287",
    date: "1 week",
  },
  {
    code: "0000000b60b040a2d8f0edcf",
    likes: "1878",
    date: "3 weeks",
  },
  {
    code: "eeedebe0ccbe7472643c3633",
    likes: "1865",
    date: "2 weeks",
  },
  {
    code: "fdf0d1ac7d8885586f643843",
    likes: "1803",
    date: "2 weeks",
  },
  {
    code: "1f2544474f7a81689dffd0ec",
    likes: "1782",
    date: "2 weeks",
  },
  {
    code: "b4b4b8c7c8cce3e1d9f2efe5",
    likes: "1707",
    date: "1 week",
  },
  {
    code: "d04848f3b95ffde7676895d2",
    likes: "1683",
    date: "3 weeks",
  },
  {
    code: "fe7a363652ad280274e9f6ff",
    likes: "1634",
    date: "3 weeks",
  },
  {
    code: "dcffb7ff6868ffbb64ffeaa7",
    likes: "1622",
    date: "4 weeks",
  },
  {
    code: "6c22a66962ad83c0c196e9c6",
    likes: "1620",
    date: "2 weeks",
  },
  {
    code: "944e63b47b84caa6a6ffe7e7",
    likes: "1516",
    date: "1 week",
  },
  {
    code: "e8c872fff3cfc9d7dd637a9f",
    likes: "1388",
    date: "2 weeks",
  },
  {
    code: "0c2d57fc6736ffb0b0efecec",
    likes: "1317",
    date: "2 weeks",
  },
  {
    code: "f28585ffa447fffc9bb7e5b4",
    likes: "1262",
    date: "2 weeks",
  },
  {
    code: "fff7f1ffe4c9e78895bed1cf",
    likes: "1238",
    date: "1 week",
  },
  {
    code: "0a1d56492e8737b5b6f2f597",
    likes: "1154",
    date: "3 weeks",
  },
  {
    code: "40a2e3fff6e9bbe2ec0d9276",
    likes: "1111",
    date: "1 week",
  },
  {
    code: "cdfadbf6fdc3ffcf96ff8080",
    likes: "882",
    date: "1 week",
  },
  {
    code: "211c6a59b4c374e291eff396",
    likes: "578",
    date: "1 week",
  },
  {
    code: "7f27ff9f70fdfdbf60ff8911",
    likes: "560",
    date: "6 days",
  },
  {
    code: "8cb9bdfefbf6ecb159b67352",
    likes: "548",
    date: "4 days",
  },
  {
    code: "d7e4c0c6dcbabbc3a4b3a398",
    likes: "381",
    date: "3 days",
  },
  {
    code: "9b4444c68484a3c9aaeeeeee",
    likes: "376",
    date: "5 days",
  },
  {
    code: "000000f72798f57d1febf400",
    likes: "129",
    date: "2 days",
  },
  {
    code: "211951836fff15f5baf0f3ff",
    likes: "107",
    date: "Yesterday",
  },
  {
    code: "070f2b1b1a55535c919290c3",
    likes: "32",
    date: "4 hours",
  },
];

export default function Home() {
  const [colorList, setColorList] = useState([]);

  const handleGenerate = () => {
    const tempArr = [];
    for (let index = 0; index < colors.length; index++) {
      const element = colors[index];

      tempArr.push({
        code: element.code,
        paletteList: [
          "#" + element.code.slice(0, 6).toUpperCase(),
          "#" + element.code.slice(6, 12).toUpperCase(),
          "#" + element.code.slice(12, 18).toUpperCase(),
          "#" + element.code.slice(18, 24).toUpperCase(),
        ],
      });
    }
    setColorList(tempArr);
  };

  return (
    <main>
      <div className="container">
        <p>Home page</p>

        <button onClick={handleGenerate}>Generate</button>

        <div className="grid grid-cols-3 gap-12 my-6">
          {colorList.map((col, index) => {
            return <ColorLine key={`col-box-${index}`} color={col} />;
          })}
        </div>
      </div>
    </main>
  );
}

const ColorLine = (props) => {
  const { color } = props;
  const { toast } = useToast();

  const handleCopy = (hexCode) => {
    if (!navigator.clipboard) return;

    toast({
      title: "Copied ...!!!",
    });

    navigator.clipboard
      .writeText(hexCode)
      .then(() => {
        toast({
          description: "Copied ...!!!",
        });
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          description: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      {color?.paletteList?.map((element, index) => {
        return (
          <div
            key={`color-block-${element}-line-${index}`}
            className={`group flex items-end h-12 bg-[${element}]`}
            style={{ backgroundColor: element }}
          >
            <div
              className="opacity-0 p-1 px-2 rounded-tr-sm bg-slate-300/40 group-hover:opacity-100 cursor-pointer"
              onClick={() => handleCopy(element)}
            >
              <code className={`text-sm font-medium`}>{element}</code>
            </div>
          </div>
        );
      })}
    </div>
  );
};
