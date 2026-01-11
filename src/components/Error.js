import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div className="Error_page">
      <h1>Oops!! You encountered an error.</h1>
      <h2>{error.status}: {error.statusText}</h2>
      <h2>{error.data}</h2>

    </div>
  )
}

export default Error;