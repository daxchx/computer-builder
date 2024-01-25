import Computer from './computer'
import View from './view'
import FetchDataType from './type'
import { config } from './config'

export default class Controller {
  private computer: Computer
  private view: View

  constructor() {
    this.computer = new Computer()
    this.view = new View()
  }

  public init(): void {
    let cpuData: FetchDataType[] | null = null
    let gpuData: FetchDataType[] | null = null
    let ramData: FetchDataType[] | null = null
    let hddData: FetchDataType[] | null = null
    let ssdData: FetchDataType[] | null = null

    // data fetch

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

    fetch(config.url + 'hdd')
      .then((response) => response.json())
      .then((data) => {
        hddData = data
      })

    fetch(config.url + 'ssd')
      .then((response) => response.json())
      .then((data) => {
        ssdData = data
      })

    // handle CPU

    config.cpuBrand?.addEventListener('change', () => {
      config.cpuModel!.innerHTML = `<option value="-">-</option>`
      for (let cpu of cpuData!) {
        if (config.cpuBrand?.value === cpu.Brand) {
          this.view.generateElement(config.cpuModel!, cpu.Model)
        }
      }
    })

    config.cpuModel?.addEventListener('change', () => {
      for (let cpu of cpuData!) {
        if (cpu.Model.indexOf(config.cpuModel!.value) !== -1) {
          this.computer.setParts('cpu', cpu)
        }
      }
    })

    // handle GPU

    config.gpuBrand?.addEventListener('change', () => {
      config.gpuModel!.innerHTML = `<option value="-">-</option>`
      for (let gpu of gpuData!) {
        if (config.gpuBrand?.value === gpu.Brand) {
          this.view.generateElement(config.gpuModel!, gpu.Model)
        }
      }
    })

    config.gpuModel?.addEventListener('change', () => {
      for (let gpu of gpuData!) {
        if (gpu.Model.indexOf(config.gpuModel!.value) !== -1) {
          this.computer.setParts('gpu', gpu)
        }
      }
    })

    // handle RAM

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

    config.ramModel?.addEventListener('change', () => {
      for (let ram of ramData!) {
        if (ram.Model.indexOf(config.ramModel!.value) !== -1) {
          this.computer.setParts('ram', ram)
        }
      }
    })

    // handle STORAGE

    config.storageType?.addEventListener('change', () => {
      config.storageSize!.innerHTML = `<option value="-">-</option>`
      config.storageBrand!.innerHTML = `<option value="-">-</option>`
      config.storageModel!.innerHTML = `<option value="-">-</option>`
      let stringArr: string[] = []
      if (config.storageType?.value == 'hdd') {
        for (let hdd of hddData!) {
          let hddString: string[] = []
          let string = ''
          let temp = ''
          if (hdd.Model[hdd.Model.length - 1] === ')') {
            let n = hdd.Model.indexOf('(')
            temp = hdd.Model.slice(0, n - 1)
          } else temp = hdd.Model
          for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i] !== ' ') {
              hddString.push(temp[i])
            } else {
              let i = hddString.length - 1
              while (i >= 0) {
                string += hddString[i]
                i--
              }
              if (stringArr.indexOf(string) === -1) {
                stringArr.push(string)
              }
              break
            }
          }
        }
        stringArr.map((size) => {
          this.view.generateElement(config.storageSize!, size)
        })
      } else if (config.storageType?.value == 'ssd') {
        for (let ssd of ssdData!) {
          let ssdString: string[] = []
          let string = ''
          let temp = ''
          if (ssd.Model[ssd.Model.length - 1] === ')') {
            let n = ssd.Model.indexOf('(')
            temp = ssd.Model.slice(0, n - 1)
          } else temp = ssd.Model
          for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i] !== ' ') {
              ssdString.push(temp[i])
            } else {
              let i = ssdString.length - 1
              while (i >= 0) {
                string += ssdString[i]
                i--
              }
              if (stringArr.indexOf(string) === -1) {
                stringArr.push(string)
              }
              break
            }
          }
        }
        stringArr.map((size) => {
          this.view.generateElement(config.storageSize!, size)
        })
      }
    })

    config.storageSize?.addEventListener('change', () => {
      config.storageBrand!.innerHTML = `<option value="-">-</option>`
      config.storageModel!.innerHTML = `<option value="-">-</option>`
      if (config.storageType?.value == 'hdd') {
        let hddBrandArr: string[] = []
        for (let hdd of hddData!) {
          if (hddBrandArr.indexOf(hdd.Brand) === -1) {
            hddBrandArr.push(hdd.Brand)
          }
        }
        for (let brand of hddBrandArr) {
          this.view.generateElement(config.storageBrand!, brand)
        }
      } else if (config.storageType?.value == 'ssd') {
        let ssdBrandArr: string[] = []
        for (let ssd of ssdData!) {
          if (ssdBrandArr.indexOf(ssd.Brand) === -1) {
            ssdBrandArr.push(ssd.Brand)
          }
        }
        for (let brand of ssdBrandArr) {
          this.view.generateElement(config.storageBrand!, brand)
        }
      }
    })

    config.storageBrand?.addEventListener('change', () => {
      config.storageModel!.innerHTML = `<option value="-">-</option>`
      if (config.storageType?.value == 'hdd') {
        for (let hdd of hddData!) {
          if (
            config.storageBrand?.value === hdd.Brand &&
            hdd.Model.indexOf(config.storageSize!.value) !== -1
          ) {
            this.view.generateElement(config.storageModel!, hdd.Model)
          }
        }
      } else if (config.storageType?.value == 'ssd') {
        for (let ssd of ssdData!) {
          if (
            config.storageBrand?.value === ssd.Brand &&
            ssd.Model.indexOf(config.storageSize!.value) !== -1
          ) {
            this.view.generateElement(config.storageModel!, ssd.Model)
          }
        }
      }
    })

    config.storageModel?.addEventListener('change', () => {
      if (config.storageType?.value == 'hdd') {
        for (let hdd of hddData!) {
          if (hdd.Model.indexOf(config.storageModel!.value) !== -1) {
            this.computer.setParts('storage', hdd)
          }
        }
      } else if (config.storageType?.value == 'ssd') {
        for (let ssd of ssdData!) {
          if (ssd.Model.indexOf(config.storageModel!.value) !== -1) {
            this.computer.setParts('storage', ssd)
          }
        }
      }
    })

    // build computer

    config.buildButton?.addEventListener('click', () => {
      if (this.computer.evalueteAllParts()) {
        this.view.generateComputer(
          this.computer.getScoreOfUseForGame(),
          this.computer.getScoreOfUseForWork()
        )
      } else alert('入力できていない項目があります。')
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
