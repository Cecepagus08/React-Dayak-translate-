import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";



 
export function InputDefault() {
  return (
    <div className="w-72">
      <Input label="Username" />
    </div>
  );
}


export default function Form() {
  return (
    <>
      <Card className="mt-6 w-96 bg-red-100 backdrop-blur-sm glass-effect">
        <CardBody>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dari-bahasa" className="block text-sm font-semibold text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="dari-bahasa"
                  name="dari-bahasa"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="ke-bahasa" className="block text-sm font-semibold text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="ke-bahasa"
                  name="ke-bahasa"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
          </div>
        </CardBody>

        <CardFooter className="mt-6">
          <button
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
