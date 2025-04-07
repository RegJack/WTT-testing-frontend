export type TestName = 'zero-or-two-images' | 'one-or-three-images'

export interface RespondentInfo {
  gender: string
  age: number
  userAgent: string
}

export interface Answer {
  questionId: string
  answerId: string
}

export interface TestResult {
  completed: boolean
  time?: number
  answers?: Answer[]
}

export interface CookieTest {
  test: TestName
  respondentInfo: RespondentInfo
  firstTestResult: TestResult
  secondTestResult: TestResult
}

export interface Option {
  id: string
  text: string
  correct: boolean
}

export interface Question {
  id: string
  text: string
  options: Option[]
}
