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

fetch(config.url + '?type=ram')
  .then((response) => response.json())
  .then(function (data) {
    for (let ram of data) {
      generateRamNumOption(ram)
    }
  })

function generateRamNumOption(data: any): void {
  let ramNumArray: number[] = []
  for (let i = data.Model.length - 1; i >= 0; i--) {
    if (data.Model[i] === ' ') {
      if (ramNumArray.indexOf(data.Model[i + 1]) === -1) {
        ramNumArray.push(data.Model[i + 1])
      }
    }
  }
  console.log(ramNumArray)
}
