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
    let ramData: any | null = null

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
          this.view.generateRamNum(num)
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

    config.ramNum?.addEventListener('change', () => {
      config.ramBrand!.innerHTML = `<option value="-">-</option>`
      let ramBrand: string[] = []
      for (let ram of ramData) {
        if (ramBrand.indexOf(ram.Brand) === -1) {
          ramBrand.push(ram.Brand)
        }
      }
      for (let brand of ramBrand) {
        this.view.generateRamBrand(brand)
      }
    })
  }
}

// // memory

// let ramData: any = []

// fetch(config.url + '?type=ram')
//   .then((response) => response.json())
//   .then(function (data) {
//     for (let ram of data) {
//       ramData.push(ram)
//       generateRamNum(ram)
//     }
//     generateRamNumOption(ramNumArray)
//   })

// let ramNumArray: number[] = []

// function generateRamNum(data: any): void {
//   for (let i = data.Model.length - 1; i >= 0; i--) {
//     if (data.Model[i] === ' ') {
//       if (ramNumArray.indexOf(data.Model[i + 1]) === -1) {
//         ramNumArray.push(data.Model[i + 1])
//         return
//       } else {
//         return
//       }
//     }
//   }
// }

// function generateRamNumOption(data: number[]): void {
//   data.map((num) => {
//     let option = document.createElement('option')
//     option.setAttribute('value', num.toString())
//     option.innerText = num.toString()
//     config.ramNum?.append(option)
//   })
// }
// let ramBrandArray: string[] = []

// function generateRamBrand(data: any) {
//   if (ramBrandArray.indexOf(data.Brand) === -1) {
//     ramBrandArray.push(data.Brand)
//     return
//   } else {
//     return
//   }
// }

// function generateRamBrandOption(data: string[]): void {
//   data.map((brand) => {
//     let option = document.createElement('option')
//     option.setAttribute('value', brand)
//     option.innerText = brand
//     config.ramBrand?.append(option)
//   })
// }

// config.ramNum!.addEventListener('change', () => {
//   for (let ram of ramData) {
//     generateRamBrand(ram)
//   }
//   config.ramBrand!.innerHTML = ''
//   config.ramModel!.innerHTML = ''
//   config.ramBrand!.innerHTML = `<option value="">-</option>`
//   config.ramModel!.innerHTML = `<option value="">-</option>`
//   generateRamBrandOption(ramBrandArray)
// })

// config.ramBrand!.addEventListener('change', () => {
//   config.ramModel!.innerHTML = ''
//   config.ramModel!.innerHTML = `<option value="">-</option>`
//   for (let ram of ramData) {
//     generateRamModel(ram)
//   }
// })

// function generateRamModel(data: any) {
//   if (config.ramBrand?.value == data.Brand) {
//     if (config.ramNum?.value == findEmptyString(data)) {
//       let option = document.createElement('option')
//       option.value = data.Model
//       option.innerText = data.Model
//       config.ramModel?.append(option)
//     }
//   }
// }

// function findEmptyString(data: any): string {
//   let stringArray: string[] = []
//   for (let i = data.Model.length; i >= 0; i--) {
//     if (data.Model[i] !== ' ') {
//       stringArray.push(data.Model[i])
//     } else break
//   }
//   return stringArray.pop() as string
// }
