import FetchDataType from './type'

interface CpuDataType {
  brand: string | null
  model: string | null
  benchmark: number | null
}

interface StorageDataType {
  type: string | null
  brand: string | null
  model: string | null
  benchmark: number | null
}

export default class Computer {
  private cpu: CpuDataType
  private gpu: CpuDataType
  private ram: CpuDataType
  private storage: StorageDataType

  constructor() {
    this.cpu = {
      brand: null,
      model: null,
      benchmark: null,
    }
    this.gpu = {
      brand: null,
      model: null,
      benchmark: null,
    }
    this.ram = {
      brand: null,
      model: null,
      benchmark: null,
    }
    this.storage = {
      type: null,
      brand: null,
      model: null,
      benchmark: null,
    }
  }

  public setParts(parts: string, data: FetchDataType): void {
    switch (parts) {
      case 'cpu':
        this.cpu.brand = data.Brand
        this.cpu.model = data.Model
        this.cpu.benchmark = data.Benchmark
        console.log(this.cpu)
        break
      case 'gpu':
        this.gpu.brand = data.Brand
        this.gpu.model = data.Model
        this.gpu.benchmark = data.Benchmark
        console.log(this.gpu)
        break
      case 'ram':
        this.ram.brand = data.Brand
        this.ram.model = data.Model
        this.ram.benchmark = data.Benchmark
        console.log(this.ram)
        break
      case 'storage':
        this.storage.type = data.Type
        this.storage.brand = data.Brand
        this.storage.model = data.Model
        this.storage.benchmark = data.Benchmark
        console.log(this.storage)
    }
  }

  public evalueteAllParts(): boolean {
    let result = true
    for (let data in this.cpu) {
      if (this.cpu[data as keyof CpuDataType] == null) result = false
    }
    for (let data in this.gpu) {
      if (this.gpu[data as keyof CpuDataType] == null) result = false
    }
    for (let data in this.ram) {
      if (this.ram[data as keyof CpuDataType] == null) result = false
    }
    for (let data in this.storage) {
      if (this.storage[data as keyof StorageDataType] == null) result = false
    }
    return result
  }

  public getCpu(): CpuDataType {
    return this.cpu
  }

  public getGpu(): CpuDataType {
    return this.gpu
  }

  public getRam(): CpuDataType {
    return this.ram
  }

  public getStorage(): StorageDataType {
    return this.storage
  }

  public getScoreOfUseForGame(): number {
    let cpuScore = this.cpu.benchmark! * 0.25
    let gpuScore = this.gpu.benchmark! * 0.6
    let ramScore = this.ram.benchmark! * 0.125
    let storageScore = this.storage.benchmark! * 0.025

    return Math.floor(cpuScore + gpuScore + ramScore + storageScore)
  }

  public getScoreOfUseForWork(): number {
    let cpuScore = this.cpu.benchmark! * 0.6
    let gpuScore = this.gpu.benchmark! * 0.25
    let ramScore = this.ram.benchmark! * 0.1
    let storageScore = this.storage.benchmark! * 0.05

    return Math.floor(cpuScore + gpuScore + ramScore + storageScore)
  }
}
