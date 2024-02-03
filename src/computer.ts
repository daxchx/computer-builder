import { FetchDataType } from './interface'
import { Parts } from './interface'
import { StorageDataType } from './interface'

export default class Computer {
  private cpu: Parts
  private gpu: Parts
  private ram: Parts
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

  /**
   * パーツをコンピュータにセットする
   * @param {string} parts - パーツ
   * @param {FetchDataType} data - fetchしたパーツのデータ
   * @returns {void}
   */
  public setParts(parts: string, data: FetchDataType): void {
    switch (parts) {
      case 'cpu':
        this.cpu.brand = data.Brand
        this.cpu.model = data.Model
        this.cpu.benchmark = data.Benchmark
        break
      case 'gpu':
        this.gpu.brand = data.Brand
        this.gpu.model = data.Model
        this.gpu.benchmark = data.Benchmark
        break
      case 'ram':
        this.ram.brand = data.Brand
        this.ram.model = data.Model
        this.ram.benchmark = data.Benchmark
        break
      case 'storage':
        this.storage.type = data.Type
        this.storage.brand = data.Brand
        this.storage.model = data.Model
        this.storage.benchmark = data.Benchmark
    }
  }

  /**
   * パーツがすべてセットされているかチェックする
   * @returns {boolean}
   */
  public checkAllParts(): boolean {
    let result = true
    for (let data in this.cpu) {
      if (this.cpu[data as keyof Parts] == null) result = false
    }
    for (let data in this.gpu) {
      if (this.gpu[data as keyof Parts] == null) result = false
    }
    for (let data in this.ram) {
      if (this.ram[data as keyof Parts] == null) result = false
    }
    for (let data in this.storage) {
      if (this.storage[data as keyof StorageDataType] == null) result = false
    }
    return result
  }

  /**
   * cpuのデータを取得する
   * @returns {Parts}
   */
  public getCpu(): Parts {
    return this.cpu
  }

  /**
   * gpuのデータを取得する
   * @returns {Parts}
   */
  public getGpu(): Parts {
    return this.gpu
  }

  /**
   * ramのデータを取得する
   * @returns {Parts}
   */
  public getRam(): Parts {
    return this.ram
  }

  /**
   * storageのデータを取得する
   * @returns {Parts}
   */
  public getStorage(): StorageDataType {
    return this.storage
  }

  /**
   * ゲーミング用として使う場合の評価を計算
   * @returns {number}
   */
  public getScoreOfUseForGame(): number {
    let cpuScore = this.cpu.benchmark! * 0.25
    let gpuScore = this.gpu.benchmark! * 0.6
    let ramScore = this.ram.benchmark! * 0.125
    let storageScore = this.storage.benchmark! * 0.025

    return Math.floor(cpuScore + gpuScore + ramScore + storageScore)
  }

  /**
   * 作業用として使う場合の評価を計算
   * @returns {number}
   */
  public getScoreOfUseForWork(): number {
    let cpuScore = this.cpu.benchmark! * 0.6
    let gpuScore = this.gpu.benchmark! * 0.25
    let ramScore = this.ram.benchmark! * 0.1
    let storageScore = this.storage.benchmark! * 0.05

    return Math.floor(cpuScore + gpuScore + ramScore + storageScore)
  }
}
