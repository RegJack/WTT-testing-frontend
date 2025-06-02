export type TestName = 'zero-or-two-images' | 'one-or-three-images'

export interface RespondentAnswer {
  question: number
  answer: number
}

export interface RespondentResult {
  test: number
  time: number
  respondent_answers?: RespondentAnswer[]
}

export interface CookieTest {
  gender: string
  age: number
  user_agent: string
  test_group: number
  created_at: Date
  respondent_results: RespondentResult[]
}
