export const config = {
  url: 'https://api.recursionist.io/builder/computers',
  cpuBrand: document.querySelector<HTMLSelectElement>('#cpu-brand'),
  cpuModel: document.querySelector<HTMLSelectElement>('#cpu-model'),
  gpuBrand: document.querySelector<HTMLSelectElement>('#gpu-brand'),
  gpuModel: document.querySelector<HTMLSelectElement>('#gpu-model'),
  ramNum: document.querySelector<HTMLSelectElement>('#ram-num'),
  ramBrand: document.querySelector<HTMLSelectElement>('#ram-brand'),
  ramModel: document.querySelector<HTMLSelectElement>('#ram-model'),
  storageType: document.querySelector<HTMLSelectElement>('#storage-type'),
  storageSize: document.querySelector<HTMLSelectElement>('#storage-size'),
  storageBrand: document.querySelector<HTMLSelectElement>('#storage-brand'),
  storageModel: document.querySelector<HTMLSelectElement>('#storage-model'),
}

export interface CpuDataType {
  Type: string
  Part_Number: number
  Brand: string
  Model: string
  Rank: number
  Benchmark: number
}
