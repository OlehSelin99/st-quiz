import { useEffect, useState } from "react";
import { type ApiCharacter } from "../../api/type";
import PageLayout from "../../transitin";
import "./Result.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../store/quizSlice";

type ResultPageProps = {
  result?: string;
  char?: ApiCharacter;
};

const ResultPage = ({ result, char }: ResultPageProps) => {
  const [image, setImage] = useState<string>("");

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (char?.photo) {
      setImage(char.photo);
    }
  }, [char]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);
    setImage("");
    dispatch(reset());
    navigate("/");
  };

  if (!isVisible) return null;

  return (
    <PageLayout>
      <div className="result-container">
        <div className="result-content">
          <h1 className="result-title">
            You are <strong>{result}</strong>
          </h1>
          {image && (
            <img
              src={image}
              alt={char?.name ?? "character"}
              style={{ display: image ? "block" : "none" }}
            />
          )}
          <div>
            <button className="st-button" onClick={handleClick}>
              Пройти тест ще раз!
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResultPage;
