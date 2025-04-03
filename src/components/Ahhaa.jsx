import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
  Button,
  Input,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  return (
    <>
      <Card className="mt-6 mb-10 w-96 bg-red-100 glases bg-transparent">
        <CardBody>
          {/* Grid untuk Input dan Button Repeat */}
          <div className="grid grid-cols-[auto,40px,auto] gap-2 items-end">
            {/* Input dari-bahasa */}
            <div>
              <label htmlFor="dari-bahasa" className="block text-sm font-semibold text-stone-50">
                dari-bahasa
              </label>
              <div className="mt-2.5">
                <input
                  id="dari-bahasa"
                  name="dari-bahasa"
                  type="text"
                  value="Dayak Ngaju"
                  readOnly
                  autoComplete="given-name"
                  className="input-effect block w-full rounded-md bg-white px-3.5 py-2 text-base text-stone-50 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>

            {/* Tombol Repeat */}
            <button className="repeat flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-lg">
              <FontAwesomeIcon icon={faRepeat} />
            </button>

            {/* Input ke-bahasa */}
            <div>
              <label htmlFor="ke-bahasa" className="block text-sm font-semibold text-stone-50">
                ke-bahasa
              </label>
              <div className="mt-2.5">
                <input
                  id="ke-bahasa"
                  name="ke-bahasa"
                  type="text"
                  value="Indonesia"
                  readOnly
                  autoComplete="family-name"
                  className="input-effect block w-full rounded-md bg-white px-3.5 py-2 text-base text-stone-50 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Input isiTeks */}
          <div className="mt-4">
            <label htmlFor="isiTeks" className="block text-sm font-semibold text-stone-50">
              Masukkan Teks 
            </label>
            <div className="mt-2.5">
              <textarea
                id="isiTeks"
                name="isiTeks"
                placeholder="masukkan teks dalam bahasa dayak ngaju"
                rows={4}
                className="input-effect block w-full rounded-md bg-white px-3.5 py-2 text-base text-stone-50 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                value={inputText}
            onChange={(e) => setInputText(e.target.value)}
              />
            </div>
          </div>
        </CardBody>

        <CardFooter className="mt-2">
          <button
          onClick={() => handleTranslate(inputText)}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </CardFooter>
      </Card>


    </>
  );
}
