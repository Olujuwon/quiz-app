export type QuestionType = 'SINGLE' | 'MULTIPLE';

export interface IQuestion {
    id: string;
    question: string;
    choices: IChoices;
    answerType: QuestionType;
    points: number;
}

export interface IChoices {
    1: string;
    2: string;
    3: string;
    4: string;
}

export interface IQuestionResult {
    questionId: string;
    question: string;
    correctAnswer: string;
    userAnswer: string;
    isCorrect: boolean;
}

export interface IQuiz {
    quizId: string;
    quizName: string;
    imageUrl: string;
    iconUrl: string;
    questions: IQuestion[];
}

export interface IResult {
    quizId: string;
    quizName: string;
    totalScore: number;
    userScore: number;
    resultDetails: IQuestionResult[];
}

export interface IAnswers {
    questionId: string;
    answers: string[];
}
