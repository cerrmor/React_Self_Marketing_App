import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" grid grid-cols-1 
    mt-10 px-10 gap-8 text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className=" text-red-500">{"Error: "+error.status+" "}{error.statusText || error.message}</i>
      </p>
      <p>
        <i>{error.data? error.data.slice(6,):null}</i>
      </p>
    </div>
  );
}