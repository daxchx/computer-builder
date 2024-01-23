import { config } from './config'

export default class View {
  public generateCpuBrand(brand: string): void {
    let element = document.createElement('option')
    element.value = brand
    element.innerText = brand
    config.cpuBrand?.append(element)
  }

  public generateCpuModel(model: string): void {
    let element = document.createElement('option')
    element.value = model
    element.innerText = model
    config.cpuModel?.append(element)
  }

  public generateGpuBrand(brand: string): void {
    let element = document.createElement('option')
    element.value = brand
    element.innerText = brand
    config.gpuBrand?.append(element)
  }

  public generateGpuModel(model: string): void {
    let element = document.createElement('option')
    element.value = model
    element.innerText = model
    config.gpuModel?.append(element)
  }

  public generateRamNum(num: number): void {
    let element = document.createElement('option')
    element.value = num.toString()
    element.innerText = num.toString()
    config.ramNum?.append(element)
  }

  public generateRamBrand(brand: string): void {
    let element = document.createElement('option')
    element.value = brand
    element.innerText = brand
    config.ramBrand?.append(element)
  }
}
