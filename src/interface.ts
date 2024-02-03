export interface FetchDataType {
  Type: string
  Part_Number: number
  Brand: string
  Model: string
  Rank: number
  Benchmark: number
}

export interface Parts {
  brand: string | null
  model: string | null
  benchmark: number | null
}

export interface StorageDataType extends Parts {
  type: string | null
}
