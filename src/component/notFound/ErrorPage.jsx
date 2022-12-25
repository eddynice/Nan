import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useNavigate();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!{" "}  </h1>
      <p>Sorry, Page not found.</p>
      <p>
     
      </p>
    </div>
  );
}