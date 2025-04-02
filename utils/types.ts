export type TestName = 'images-0|2' | 'images-1|3'

export interface RespondentInfo {
  gender: string
  age: string
}

export interface Answer {
  questionId: string
  answerId: string
}

export interface TestResult {
  completed: boolean
  time: string
  answers: Answer[]
}

export interface CookieTest {
  test: TestName
  respondentInfo: RespondentInfo
  firstTestResult: TestResult
  secondTestResult: TestResult
}
