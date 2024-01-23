export default class Computer {
  public cpu: null
  public gpu: null
  public ram: null
  public hdd: null
  public ssd: null

  constructor() {
    this.cpu = null
    this.gpu = null
    this.ram = null
    this.hdd = null
    this.ssd = null
  }

  public setCpu(data: any): void {
    this.cpu = data
  }
}
