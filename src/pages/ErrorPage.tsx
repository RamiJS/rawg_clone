import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="p-8 h-screen">
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "404. Page Not Found."
          : "An unexpected error occurred."}
      </p>
    </div>
  );
};

export default ErrorPage;
