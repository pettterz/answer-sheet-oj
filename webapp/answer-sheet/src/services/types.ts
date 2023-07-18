import { Timestamp } from "@firebase/firestore";

export interface Sheet {
  id: string;
  last_answered_at: Timestamp;
  latest_answered: number;
  name: string;
  started_at: Timestamp;
  quiz_id: string;
}

export interface Quiz {
  id: string;
  name: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  total_question_count: number;
  sheets?: Sheet[];
}

export interface Question {
  choices: string[];
  correct_answer: number[];
  correct_times: number;
  wrong_times: number;
  not_sure_times: number;
  question: string;
  quiz_id: string;
}

export interface Answer {
  answer: number[];
  answer_sheet_id: string;
  answered_at: Timestamp;
  not_sure: boolean;
  question_id: string;
  quiz_id: string;
}
