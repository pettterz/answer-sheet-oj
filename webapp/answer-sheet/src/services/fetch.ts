import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../Firebase";
import { Quiz, Sheet } from "./types";

const QUIZ_COLLECTION_NAME = "quizzes";
const SHEET_COLLECTION_NAME = "answer_sheets";

export const fetchQuizzes = async () => {
  const queryQuizzes = await getDocs(collection(db, QUIZ_COLLECTION_NAME));
  return queryQuizzes.docs.map((quiz) => ({ id: quiz.id, ...quiz.data() } as Quiz));
}

export const fetchAnswerSheet = async (quizId: string) => {
  // const querySheet = collection(db, SHEET_COLLECTION_NAME);
  const quizRef = doc(db, QUIZ_COLLECTION_NAME, quizId);

  const querySheet = query(
    collection(db, SHEET_COLLECTION_NAME),
    where("quiz_id", "==", quizRef)
  );
  const sheets = await getDocs(querySheet); 

  if (sheets.empty) return [] as Sheet[];
  else return sheets.docs.map((sheet) => ({ id: sheet.id, ...sheet.data(), quiz_id: sheet.data().quiz_id.id } as Sheet));
}
