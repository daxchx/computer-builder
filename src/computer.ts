export default class Computer {
  private cpu: any | null = null
  private gpu: any | null = null
  private ram: any | null = null
  private hdd: any | null = null
  private ssd: any | null = null

  public setCpu(data: any): void {
    this.cpu = data
  }
}
