import Computer from './computer'
import View from './view'
import { config } from './config'

export default class Controller {
  computer: Computer
  view: View

  constructor() {
    this.computer = new Computer()
    this.view = new View()
  }

  public init(): void {
    let cpuData: any | null = null
    let gpuData: any | null = null

    fetch(config.url + 'cpu')
      .then((response) => response.json())
      .then((data) => {
        cpuData = data
        let brandArr: string[] = []
        for (let cpu of data) {
          if (brandArr.indexOf(cpu.Brand) === -1) {
            brandArr.push(cpu.Brand)
          }
        }
        for (let brand of brandArr) {
          this.view.generateCpuBrand(brand)
        }
      })

    fetch(config.url + 'gpu')
      .then((response) => response.json())
      .then((data) => {
        gpuData = data
        let brandArr: string[] = []
        for (let gpu of data) {
          if (brandArr.indexOf(gpu.Brand) === -1) {
            brandArr.push(gpu.Brand)
          }
        }
        for (let brand of brandArr) {
          this.view.generateGpuBrand(brand)
        }
      })

    config.cpuBrand?.addEventListener('change', () => {
      config.cpuModel!.innerHTML = `<option value="-">-</option>`
      for (let cpu of cpuData) {
        if (config.cpuBrand?.value === cpu.Brand) {
          this.view.generateCpuModel(cpu.Model)
        }
      }
    })

    config.gpuBrand?.addEventListener('change', () => {
      config.gpuModel!.innerHTML = `<option value="-">-</option>`
      for (let gpu of gpuData) {
        if (config.gpuBrand?.value === gpu.Brand) {
          this.view.generateGpuModel(gpu.Model)
        }
      }
    })
  }
}
