export default class View {
  public generateElement(target: HTMLSelectElement, data: string): void {
    let element = document.createElement('option')
    element.value = data
    element.innerText = data
    target.append(element)
  }

  public generateComputer(gamingScore: number, workScore: number, cpuObject: any, gpuObject: any, ramObject: any, storageObject: any): void {
    document.querySelector<HTMLDivElement>('#computer')!.innerHTML += `
    <div class="w-80 p-4 border border-gray-200 rounded-lg shrink-0 shadow-sm">
      <div>
        <div class="text-xs text-gray-400">CPU</div>
        <div class="text-sm font-bold">${cpuObject.brand}</div>
        <div class="text-sm font-bold">${cpuObject.model}</div>
      </div>
      <div>
        <div class="text-xs text-gray-400">GPU</div>
        <div class="text-sm font-bold">${gpuObject.brand}</div>
        <div class="text-sm font-bold">${gpuObject.model}</div>
      </div>
      <div>
        <div class="text-xs text-gray-400">RAM</div>
        <div class="text-sm font-bold">${ramObject.brand}</div>
        <div class="text-sm font-bold">${ramObject.model}</div>
      </div>
      <div>
        <div class="text-xs text-gray-400">STORAGE</div>
        <div class="text-sm font-bold">${storageObject.type}</div>
        <div class="text-sm font-bold">${storageObject.brand}</div>
        <div class="text-sm font-bold">${storageObject.model}</div>
      </div>
      <div class="">Gaming ${gamingScore}%</div>
      <div class="">Work ${workScore}%</div>
    </div>
    `
  }
}
