import Computer from './computer'
import View from './view'
import { FetchDataType } from './interface'
import { config } from './config'

export default class Controller {
  private computer: Computer
  private view: View

  constructor() {
    this.computer = new Computer()
    this.view = new View()
  }

  public loading(): void {
    this.view.renderLoading()
    setTimeout(() => {
      const loading = document.querySelector<HTMLDivElement>('#loading')
      loading?.classList.remove('scale-x-0')
      loading?.classList.add('scale-x-100')
    }, 500)

    setTimeout(() => {
      this.init()
    }, 2500)
  }

  next() {}

  public init(): void {
    this.view.renderInit()
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
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#cpu-brand')!, brand)
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
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#gpu-brand')!, brand)
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
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#ram-num')!, num.toString())
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

    document.querySelector<HTMLSelectElement>('#cpu-brand')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#cpu-model')!.innerHTML = `<option value="-">-</option>`
      for (let cpu of cpuData!) {
        if (document.querySelector<HTMLSelectElement>('#cpu-brand')?.value === cpu.Brand) {
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#cpu-model')!, cpu.Model)
        }
      }
    })

    document.querySelector<HTMLSelectElement>('#cpu-model')?.addEventListener('change', () => {
      for (let cpu of cpuData!) {
        if (cpu.Model.indexOf(document.querySelector<HTMLSelectElement>('#cpu-model')!.value) !== -1) {
          this.computer.setParts('cpu', cpu)
        }
      }

      if (document.querySelector<HTMLSelectElement>('#cpu-model')!.value == '-') {
        this.computer.setParts('cpu', null)
        console.log('null')
      }

      if (document.querySelector<HTMLSelectElement>('#cpu-model')?.value !== '-') {
        document.querySelector<HTMLSelectElement>('#cpu-brand')?.classList.remove('font-normal')
        document.querySelector<HTMLSelectElement>('#cpu-brand')?.classList.add('font-bold')
      } else {
        document.querySelector<HTMLSelectElement>('#cpu-brand')?.classList.remove('font-bold')
        document.querySelector<HTMLSelectElement>('#cpu-brand')?.classList.add('font-normal')
      }
    })

    // handle GPU

    document.querySelector<HTMLSelectElement>('#gpu-brand')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#gpu-model')!.innerHTML = `<option value="-">-</option>`
      for (let gpu of gpuData!) {
        if (document.querySelector<HTMLSelectElement>('#gpu-brand')?.value === gpu.Brand) {
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#gpu-model')!, gpu.Model)
        }
      }
    })

    document.querySelector<HTMLSelectElement>('#gpu-model')?.addEventListener('change', () => {
      for (let gpu of gpuData!) {
        if (gpu.Model.indexOf(document.querySelector<HTMLSelectElement>('#gpu-model')!.value) !== -1) {
          this.computer.setParts('gpu', gpu)
        }
      }
    })

    // handle RAM

    document.querySelector<HTMLSelectElement>('#ram-num')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#ram-brand')!.innerHTML = `<option value="-">-</option>`
      document.querySelector<HTMLSelectElement>('#ram-model')!.innerHTML = `<option value="-">-</option>`
      let ramBrand: string[] = []
      for (let ram of ramData!) {
        if (ramBrand.indexOf(ram.Brand) === -1) {
          ramBrand.push(ram.Brand)
        }
      }
      for (let brand of ramBrand) {
        this.view.generateElement(document.querySelector<HTMLSelectElement>('#ram-brand')!, brand)
      }
    })

    document.querySelector<HTMLSelectElement>('#ram-brand')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#ram-model')!.innerHTML = `<option value="-">-</option>`
      for (let ram of ramData!) {
        if (document.querySelector<HTMLSelectElement>('#ram-brand')?.value == ram.Brand) {
          if (document.querySelector<HTMLSelectElement>('#ram-num')?.value == findEmptyString(ram)) {
            this.view.generateElement(document.querySelector<HTMLSelectElement>('#ram-model')!, ram.Model)
          }
        }
      }
    })

    document.querySelector<HTMLSelectElement>('#ram-model')?.addEventListener('change', () => {
      for (let ram of ramData!) {
        if (ram.Model.indexOf(document.querySelector<HTMLSelectElement>('#ram-model')!.value) !== -1) {
          this.computer.setParts('ram', ram)
        }
      }
    })

    // handle STORAGE

    document.querySelector<HTMLSelectElement>('#storage-type')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#storage-size')!.innerHTML = `<option value="-">-</option>`
      document.querySelector<HTMLSelectElement>('#storage-brand')!.innerHTML = `<option value="-">-</option>`
      document.querySelector<HTMLSelectElement>('#storage-model')!.innerHTML = `<option value="-">-</option>`
      let stringArr: string[] = []
      if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'hdd') {
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
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#storage-size')!, size)
        })
      } else if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'ssd') {
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
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#storage-size')!, size)
        })
      }
    })

    document.querySelector<HTMLSelectElement>('#storage-size')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#storage-brand')!.innerHTML = `<option value="-">-</option>`
      document.querySelector<HTMLSelectElement>('#storage-model')!.innerHTML = `<option value="-">-</option>`
      if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'hdd') {
        let hddBrandArr: string[] = []
        for (let hdd of hddData!) {
          if (hddBrandArr.indexOf(hdd.Brand) === -1) {
            hddBrandArr.push(hdd.Brand)
          }
        }
        for (let brand of hddBrandArr) {
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#storage-brand')!, brand)
        }
      } else if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'ssd') {
        let ssdBrandArr: string[] = []
        for (let ssd of ssdData!) {
          if (ssdBrandArr.indexOf(ssd.Brand) === -1) {
            ssdBrandArr.push(ssd.Brand)
          }
        }
        for (let brand of ssdBrandArr) {
          this.view.generateElement(document.querySelector<HTMLSelectElement>('#storage-brand')!, brand)
        }
      }
    })

    document.querySelector<HTMLSelectElement>('#storage-brand')?.addEventListener('change', () => {
      document.querySelector<HTMLSelectElement>('#storage-model')!.innerHTML = `<option value="-">-</option>`
      if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'hdd') {
        for (let hdd of hddData!) {
          if (document.querySelector<HTMLSelectElement>('#storage-brand')?.value === hdd.Brand && hdd.Model.indexOf(document.querySelector<HTMLSelectElement>('#storage-size')!.value) !== -1) {
            this.view.generateElement(document.querySelector<HTMLSelectElement>('#storage-model')!, hdd.Model)
          }
        }
      } else if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'ssd') {
        for (let ssd of ssdData!) {
          if (document.querySelector<HTMLSelectElement>('#storage-brand')?.value === ssd.Brand && ssd.Model.indexOf(document.querySelector<HTMLSelectElement>('#storage-size')!.value) !== -1) {
            this.view.generateElement(document.querySelector<HTMLSelectElement>('#storage-model')!, ssd.Model)
          }
        }
      }
    })

    document.querySelector<HTMLSelectElement>('#storage-model')?.addEventListener('change', () => {
      if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'hdd') {
        for (let hdd of hddData!) {
          if (hdd.Model.indexOf(document.querySelector<HTMLSelectElement>('#storage-model')!.value) !== -1) {
            this.computer.setParts('storage', hdd)
          }
        }
      } else if (document.querySelector<HTMLSelectElement>('#storage-type')?.value == 'ssd') {
        for (let ssd of ssdData!) {
          if (ssd.Model.indexOf(document.querySelector<HTMLSelectElement>('#storage-model')!.value) !== -1) {
            this.computer.setParts('storage', ssd)
          }
        }
      }
    })

    // build computer

    document.querySelector<HTMLButtonElement>('#build')?.addEventListener('click', () => {
      if (this.computer.checkAllParts()) {
        this.view.generateComputer(
          this.computer.getScoreOfUseForGame(),
          this.computer.getScoreOfUseForWork(),
          this.computer.getCpu(),
          this.computer.getGpu(),
          this.computer.getRam(),
          this.computer.getStorage()
        )
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
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
