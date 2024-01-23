import Computer from './computer'
import View from './view'
import FetchDataType from './type'
import { config } from './config'

export default class Controller {
  computer: Computer
  view: View

  constructor() {
    this.computer = new Computer()
    this.view = new View()
  }

  public init(): void {
    let cpuData: FetchDataType[] | null = null
    let gpuData: FetchDataType[] | null = null
    let ramData: FetchDataType[] | null = null

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
          this.view.generateElement(config.cpuBrand!, brand)
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
          this.view.generateElement(config.gpuBrand!, brand)
        }
      })

    fetch(config.url + 'ram')
      .then((response) => response.json())
      .then((data) => {
        ramData = data
        let ramNumArr: number[] = []
        for (let ramNum of data) {
          for (let i = ramNum.Model.length - 1; i >= 0; i--) {
            if (ramNum.Model[i] === ' ') {
              if (ramNumArr.indexOf(ramNum.Model[i + 1]) === -1) {
                ramNumArr.push(ramNum.Model[i + 1])
              }
              break
            }
          }
        }
        ramNumArr.sort((a, b) => (a < b ? -1 : 1))
        for (let num of ramNumArr) {
          this.view.generateElement(config.ramNum!, num.toString())
        }
      })

    config.cpuBrand?.addEventListener('change', () => {
      config.cpuModel!.innerHTML = `<option value="-">-</option>`
      for (let cpu of cpuData!) {
        if (config.cpuBrand?.value === cpu.Brand) {
          this.view.generateElement(config.cpuModel!, cpu.Model)
        }
      }
    })

    config.gpuBrand?.addEventListener('change', () => {
      config.gpuModel!.innerHTML = `<option value="-">-</option>`
      for (let gpu of gpuData!) {
        if (config.gpuBrand?.value === gpu.Brand) {
          this.view.generateElement(config.gpuModel!, gpu.Model)
        }
      }
    })

    config.ramNum?.addEventListener('change', () => {
      config.ramBrand!.innerHTML = `<option value="-">-</option>`
      config.ramModel!.innerHTML = `<option value="-">-</option>`
      let ramBrand: string[] = []
      for (let ram of ramData!) {
        if (ramBrand.indexOf(ram.Brand) === -1) {
          ramBrand.push(ram.Brand)
        }
      }
      for (let brand of ramBrand) {
        this.view.generateElement(config.ramBrand!, brand)
      }
    })

    config.ramBrand?.addEventListener('change', () => {
      config.ramModel!.innerHTML = `<option value="-">-</option>`
      for (let ram of ramData!) {
        if (config.ramBrand?.value == ram.Brand) {
          if (config.ramNum?.value == findEmptyString(ram)) {
            this.view.generateElement(config.ramModel!, ram.Model)
          }
        }
      }
    })

    // setModel

    config.cpuModel?.addEventListener('change', () => {
      for (let cpu of cpuData!) {
        if (config.cpuModel?.value === cpu.Model) {
          this.computer.setParts('cpu', cpu)
          console.log('cpu: ' + this.computer.getBenchMark(this.computer.cpu))
        }
      }
    })

    config.gpuModel?.addEventListener('change', () => {
      for (let gpu of gpuData!) {
        if (config.gpuModel?.value === gpu.Model) {
          this.computer.setParts('gpu', gpu)
          console.log('gpu: ' + this.computer.getBenchMark(this.computer.gpu))
        }
      }
    })

    config.ramModel?.addEventListener('change', () => {
      for (let ram of ramData!) {
        if (config.ramModel?.value === ram.Model) {
          this.computer.setParts('ram', ram)
          console.log('ram: ' + this.computer.getBenchMark(this.computer.ram))
        }
      }
    })
  }
}

function findEmptyString(data: any): string {
  let stringArray: string[] = []
  for (let i = data.Model.length; i >= 0; i--) {
    if (data.Model[i] !== ' ') {
      stringArray.push(data.Model[i])
    } else break
  }
  return stringArray.pop() as string
}
