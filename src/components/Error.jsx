import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1 className="error__heading">A apărut o eroare!</h1>

      <button className="error__btn" onClick={() => navigate(-1)}>
        Mergi înapoi
      </button>
    </div>
  );
}

export default Error;
