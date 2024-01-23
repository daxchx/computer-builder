import FetchDataType from './type'

export default class Computer {
  public cpu: FetchDataType | null
  public gpu: FetchDataType | null
  public ram: FetchDataType | null
  public hdd: FetchDataType | null
  public ssd: FetchDataType | null

  constructor() {
    this.cpu = null
    this.gpu = null
    this.ram = null
    this.hdd = null
    this.ssd = null
  }

  public setParts(parts: string, data: FetchDataType): void {
    switch (parts) {
      case 'cpu':
        this.cpu = data
        break
      case 'gpu':
        this.gpu = data
        break
      case 'ram':
        this.ram = data
        break
      case 'hdd':
        this.hdd = data
        break
      case 'ssd':
        this.ssd = data
        break
      default:
        console.log('not found')
    }
  }

  public getBenchMark(data: any): number {
    return data.Benchmark
  }
}
