import { useEffect, useMemo, useState } from "react";
import "./QuizPage.css";
import data from "../../assets/data";
import getAllCharacters from "../../api/getCharacters";
import ResultPage from "../Result/Result";
import { type ApiCharacter } from "../../api/type";
import { useSelector } from "react-redux";
import PageLayout from "../../transitin";
import { motion, AnimatePresence } from "framer-motion";

type Scores = Record<string, number>;

const QuizPage = () => {
  const resetTrigger = useSelector((state: any) => state.quiz.resetTrigger);

  const [characters, setCharacters] = useState<ApiCharacter[]>([]);
  const [scores, setScores] = useState<Scores>({});
  const [index, setIndex] = useState(0);

  // get data api
  useEffect(() => {
    const getData = async () => {
      const apiData = await getAllCharacters();
      setCharacters(apiData);
    };
    getData();
  }, []);

  // create const names
  const CHARACTER_NAMES = useMemo(
    () => characters.map((c) => c.name),
    [characters],
  );
  // apply 0 to everyone characters
  useEffect(() => {
    console.log("Start!");
    if (CHARACTER_NAMES.length === 0) return;
    const initialScores: Scores = Object.fromEntries(
      CHARACTER_NAMES.map((name) => [name, 0]),
    );
    setScores(initialScores);
  }, [CHARACTER_NAMES, resetTrigger]);

  // calculate points
  const applyAnswer = (optionScore: Partial<Scores>, currentScores: Scores) => {
    const newScores: Scores = { ...currentScores };

    Object.keys(optionScore).forEach((character) => {
      newScores[character] =
        (newScores[character] ?? 0) + (optionScore[character] ?? 0);
      console.log(`Updated score for ${character}: ${newScores[character]}`);
    });

    return newScores;
  };

  // get result
  const getTopCharacter = (scoresObj: Scores): string | null => {
    const entries = Object.entries(scoresObj) as [string, number][];
    if (entries.length === 0) return null;

    return entries.reduce((max, current) =>
      current[1] > max[1] ? current : max,
    )[0];
  };

  if (index >= data.length) {
    const result = getTopCharacter(scores) ?? "Unknown";
    const char = characters.find((el) => el.name === result);

    // Go to result page
    return <ResultPage result={result} char={char} />;
  }

  const question = data[index];

  return (
    <PageLayout>
      <div className="container">
        <h2>Вікторина за мотивами Stranger Things</h2>

        <AnimatePresence mode="wait">
        <motion.div
          key={index} // Це критично важливо для спрацювання анімації
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="quiz-question">
            {index + 1}. {question.question}
          </p>

          <div className="group-option">
            <ul>
              {question.options.map((item) => (
                <li
                  className="item-option"
                  key={item.text}
                  onClick={() => {
                    setScores((prev) => applyAnswer(item.score, prev));
                    setIndex((prev) => prev + 1);
                  }}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

        <div className="index">
          {index + 1} of {data.length} questions
        </div>
      </div>
    </PageLayout>
  );
};

export default QuizPage;
