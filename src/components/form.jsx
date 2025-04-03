import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faCopy, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import kamusDataRaw from "../data/kamus_dayak.json";

export default function Form() {
  const [isReversed, setIsReversed] = useState(false);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const textAreaRef = useRef(null);

  // Normalisasi kamus agar semua kata dalam huruf kecil
  const kamusData = {
    kata_dasar: Object.fromEntries(
      Object.entries(kamusDataRaw.kata_dasar).map(([dayak, indonesia]) => [
        dayak.toLowerCase(),
        indonesia.toLowerCase(),
      ])
    ),
  };

  // Buat kamus terbalik (Indonesia → Dayak)
  const kamusTerbalik = Object.fromEntries(
    Object.entries(kamusData.kata_dasar).map(([dayak, indonesia]) => [
      indonesia.toLowerCase(),
      dayak.toLowerCase(),
    ])
  );

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  }, [translatedText]);

  const translate = (text, reverse) => {
    const words = text.toLowerCase().split(/\s+/); // Normalisasi input
    return words
      .map((word) => {
        if (reverse) {
          return kamusTerbalik[word] || word;
        } else {
          return kamusData.kata_dasar[word] || word;
        }
      })
      .join(" ");
  };

  const handleTranslate = () => {
    setTranslatedText(translate(inputText, isReversed));
  };

  useEffect(() => {
    if (inputText.trim() !== "") {
      setTranslatedText(translate(inputText, isReversed));
    }
  }, [isReversed]);

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap align-items-center justify-content-center">
          <Card className="mt-6 mb-10 w-96 bg-red-100 self-center lg:w-1/2 mx-auto glases bg-transparent">
            <CardBody>
              <div className="grid grid-cols-[auto,40px,auto] gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold text-stone-50">
                    Dari Bahasa
                  </label>
                  <input
                    type="text"
                    value={isReversed ? "Indonesia" : "Dayak Ngaju"}
                    readOnly
                    className="input-effect block w-full rounded-md bg-white px-3.5 py-2 text-base text-stone-50 border border-gray-300"
                  />
                </div>
                <button
                  className="repeat flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-lg"
                  onClick={() => setIsReversed(!isReversed)}
                >
                  <FontAwesomeIcon icon={faRepeat} />
                </button>
                <div>
                  <label className="block text-sm font-semibold text-stone-50">
                    Ke Bahasa
                  </label>
                  <input
                    type="text"
                    value={isReversed ? "Dayak Ngaju" : "Indonesia"}
                    readOnly
                    className="input-effect block w-full rounded-md bg-white px-3.5 py-2 text-base text-stone-50 border border-gray-300"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold text-stone-50">Masukkan Teks</label>
                <textarea
                  placeholder={
                    isReversed
                      ? "Masukkan teks dalam bahasa Indonesia"
                      : "Masukkan teks dalam bahasa Dayak Ngaju"
                  }
                  className="input-effect block w-full rounded-md bg-white px-3.5 py-2 text-base text-stone-50 border border-gray-300"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
            </CardBody>

            <CardFooter>
              <button
                onClick={handleTranslate}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-500"
              >
                Terjemahkan
              </button>
            </CardFooter>
          </Card>

          {/* Card Hasil Terjemahan */}
          <Card className="w-96 m-4 mx-auto shadow-lg self-end lg:w-1/2">
            <CardHeader className="bg-blue-500 text-white p-4">
              <Typography variant="h6">Hasil Terjemahan</Typography>
            </CardHeader>
            <CardBody>
              <div className="relative">
                <textarea
                  ref={textAreaRef}
                  readOnly
                  className="bg-transparent input-effect outline-0 block w-full rounded-md bg-gray-200 px-3.5 py-2 text-base text-black resize-none overflow-hidden"
                  value={translatedText}
                />
              </div>
              <div className="flex gap-2 absolute right-2 justify-center align-items-center bottom-2" >
              
              <button
                className=" flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-lg"
                onClick={() => console.log("Play audio")}
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
              <button
                className=" flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-lg"
                onClick={() => console.log("Play audio")}
              >
                <FontAwesomeIcon icon={faVolumeHigh} />
              </button>
              </div>
              
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
