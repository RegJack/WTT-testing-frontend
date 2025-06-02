export interface ApiText {
  id: number
  name: string
  length: number
  questions: ApiQuestion[]
}

export interface ApiQuestion {
  id: number
  title: string
  answers: ApiAnswer[]
}

export interface ApiAnswer {
  id: number
  title: string
  is_correct: boolean
}

export interface ApiRespondentStats {
  id: number
  gender: string
  age: number
  user_agent: string
  respondent_results: ApiRespondentStatsResult[]
}

export interface ApiRespondentStatsResult {
  id: number
  test_id: number
  test_name: string
  text_length: number
  time: number
  reading_speed: number
  correct_answers: number
  total_answers: number
  correct_percentage: number
  reading_speed_with_coef: number
}
