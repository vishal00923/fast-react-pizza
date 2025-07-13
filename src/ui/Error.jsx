import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </>
  );
};

export default Error;
