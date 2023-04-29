import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"
import { AnswerQuestionUseCase } from "./answer-question"

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return
  },
}

test("Create a new answer", async () => {
  const answwerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answwerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "New answer",
  })

  expect(answer.content).toEqual("New answer")
})
