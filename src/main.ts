import './style.css'
import { config } from './config'

interface CpuDataType {
  Type: string
  Part_Number: number
  Brand: string
  Model: string
  Rank: number
  Benchmark: number
}

config.cpuBrand!.addEventListener('change', () => {
  fetch(config.url + '?type=cpu')
    .then((response) => response.json())
    .then(function (data) {
      config.cpuModel!.innerHTML = ''
      config.cpuModel!.innerHTML = `<option value="">-</option>`
      for (let cpu of data) {
        generateOption(cpu, config.cpuBrand!.value)
      }
    })
})

function generateOption(data: CpuDataType, value: string): void {
  let container = document.createElement('option')

  if (value === data.Brand) {
    container.innerText = data.Model
    config.cpuModel?.append(container)
  }
}

let cpuBenchMark: number = 0

config.cpuModel!.addEventListener('change', () => {
  console.log(config.cpuModel!.value)

  fetch(config.url + '?type=cpu')
    .then((response) => response.json())
    .then(function (data) {
      for (let cpu of data) {
        if (config.cpuModel!.value == cpu.Model) {
          cpuBenchMark = cpu.Benchmark
          console.log(cpuBenchMark)
        }
      }
    })
})

// gpu

fetch(config.url + '?type=gpu')
  .then((response) => response.json())
  .then(function (data) {
    config.gpuBrand
    let temp: string[] = []
    for (let gpu of data) {
      if (temp.indexOf(gpu.Brand) == -1) {
        temp.push(gpu.Brand)
      }
    }
    generateGpuBrandOption(temp)
  })

function generateGpuBrandOption(data: string[]): void {
  data.map((brand) => {
    let option = document.createElement('option')
    option.setAttribute('value', brand)
    option.innerText = brand
    config.gpuBrand!.append(option)
  })
}

config.gpuBrand!.addEventListener('change', () => {
  fetch(config.url + '?type=gpu')
    .then((response) => response.json())
    .then(function (data) {
      config.gpuModel!.innerHTML = ''
      config.gpuModel!.innerHTML = `<option value="">-</option>`
      for (let gpu of data) {
        let container = document.createElement('option')
        if (config.gpuBrand!.value === gpu.Brand) {
          container.innerText = gpu.Model
          config.gpuModel?.append(container)
        }
      }
    })
  console.log(config.gpuBrand!.value)
})

// memory

let ramData: any = []

fetch(config.url + '?type=ram')
  .then((response) => response.json())
  .then(function (data) {
    for (let ram of data) {
      ramData.push(ram)
      generateRamNum(ram)
    }
    generateRamNumOption(ramNumArray)
  })

let ramNumArray: number[] = []

function generateRamNum(data: any): void {
  for (let i = data.Model.length - 1; i >= 0; i--) {
    if (data.Model[i] === ' ') {
      if (ramNumArray.indexOf(data.Model[i + 1]) === -1) {
        ramNumArray.push(data.Model[i + 1])
        return
      } else {
        return
      }
    }
  }
}

function generateRamNumOption(data: number[]): void {
  data.map((num) => {
    let option = document.createElement('option')
    option.setAttribute('value', num.toString())
    option.innerText = num.toString()
    config.ramNum?.append(option)
  })
}
let ramBrandArray: string[] = []

function generateRamBrand(data: any) {
  if (ramBrandArray.indexOf(data.Brand) === -1) {
    ramBrandArray.push(data.Brand)
    return
  } else {
    return
  }
}

function generateRamBrandOption(data: string[]): void {
  data.map((brand) => {
    let option = document.createElement('option')
    option.setAttribute('value', brand)
    option.innerText = brand
    config.ramBrand?.append(option)
  })
}

config.ramNum!.addEventListener('change', () => {
  for (let ram of ramData) {
    generateRamBrand(ram)
  }
  config.ramBrand!.innerHTML = ''
  config.ramModel!.innerHTML = ''
  config.ramBrand!.innerHTML = `<option value="">-</option>`
  config.ramModel!.innerHTML = `<option value="">-</option>`
  generateRamBrandOption(ramBrandArray)
})

config.ramBrand!.addEventListener('change', () => {
  config.ramModel!.innerHTML = ''
  config.ramModel!.innerHTML = `<option value="">-</option>`
  for (let ram of ramData) {
    generateRamModel(ram)
  }
})

function generateRamModel(data: any) {
  if (config.ramBrand?.value == data.Brand) {
    if (config.ramNum?.value == findEmptyString(data)) {
      let option = document.createElement('option')
      option.value = data.Model
      option.innerText = data.Model
      config.ramModel?.append(option)
    }
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

// storage

let hddData: any = []
let ssdData: any = []

fetch(config.url + '?type=hdd')
  .then((response) => response.json())
  .then(function (data) {
    for (let hdd of data) {
      hddData.push(hdd)
    }
  })

fetch(config.url + '?type=ssd')
  .then((response) => response.json())
  .then(function (data) {
    for (let ssd of data) {
      ssdData.push(ssd)
    }
  })

config.storageType?.addEventListener('change', () => {
  let stringArr: string[] = []
  if (config.storageType?.value == 'hdd') {
    for (let hdd of hddData) {
      let string: string[] = []
      let str = ''
      let temp = ''
      if (hdd.Model[hdd.Model.length - 1] === ')') {
        let n = hdd.Model.indexOf('(')
        temp = hdd.Model.slice(0, n - 1)
      } else temp = hdd.Model

      for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] !== ' ') {
          string.push(temp[i])
        } else {
          let i = string.length - 1

          while (i >= 0) {
            str += string[i]
            i--
          }

          if (stringArr.indexOf(str) === -1) {
            stringArr.push(str)
          }
          break
        }
      }
    }

    stringArr.map((size) => {
      let option = document.createElement('option')
      option.value = size
      option.innerText = size
      config.storageSize?.append(option)
    })
  }
})
