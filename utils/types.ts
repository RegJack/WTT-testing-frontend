export type TestName = 'zero-or-two-images' | 'one-or-three-images'

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
  time?: string
  answers?: Answer[]
}

export interface CookieTest {
  test: TestName
  respondentInfo: RespondentInfo
  firstTestResult: TestResult
  secondTestResult: TestResult
}
