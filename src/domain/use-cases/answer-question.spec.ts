import { expect, test } from "vitest"
import { AnswerQuestionUseCase } from "./answer-question"

test("Create a new answer", () => {
  const answwerQuestion = new AnswerQuestionUseCase()

  const answer = answwerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "New answer",
  })

  expect(answer.content).toEqual("New answer")
})
