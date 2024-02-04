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

  public renderLoading(): void {
    let htmlString = `
    <div class="flex h-screen flex-col items-center justify-center mx-6">
      <h1 class="inline-block bg-gradient-to-b from-white to-white/30 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent lg:text-6xl">Computer Builder</h1>
      <div class="relative mt-4 h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-[#2f2f2f]">
        <div id="loading" class="absolute left-0 h-full w-full origin-left scale-x-0 rounded-full bg-white"></div>
      </div>
    </div>
    `
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = htmlString
  }

  public renderInit(): void {
    let htmlString = `
    <div class="relative mt-8">
    <div class="w-6 h-full bg-gradient-to-r from-white to-transparent absolute left-0"></div>
    <div class="w-6 h-full bg-gradient-to-l from-white to-transparent absolute right-0"></div>
    <div id="computer" class="flex gap-x-4 px-6 px-4 overflow-x-scroll"></div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-gray-400">CPU</h2>
    <div class="mx-6 border border-gray-200 rounded-lg overflow-hidden">
      <div class="flex items-center border-b border-gray-200">
        <label for="cpu-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="cpu-brand" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="cpu-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="cpu-model" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-gray-400">GPU</h2>
    <div class="mx-6 border border-gray-200 rounded-lg overflow-hidden">
      <div class="flex items-center border-b border-gray-200">
        <label for="gpu-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="gpu-brand" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="gpu-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="gpu-model" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-gray-400">memory card</h2>
    <div class="mx-6 border border-gray-200 rounded-lg overflow-hidden">
      <div class="flex items-center border-b border-gray-200">
        <label for="ram-num" class="flex items-center px-2 h-10 text-sm text-gray-400">how many</label>
        <select id="ram-num" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="ram-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="ram-brand" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="ram-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="ram-model" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-gray-400">storage</h2>
    <div class="mx-6 border border-gray-200 rounded-lg overflow-hidden">
      <div class="flex items-center border-b border-gray-200">
        <label for="storage-type" class="flex items-center px-2 h-10 text-sm text-gray-400">type</label>
        <select id="storage-type" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
          <option value="hdd">HDD</option>
          <option value="ssd">SSD</option>
        </select>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="storage-size" class="flex items-center px-2 h-10 text-sm text-gray-400">storage</label>
        <select id="storage-size" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="storage-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="storage-brand" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="storage-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="storage-model" class="flex-auto pr-2 py-2 rounded-lg text-sm">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8 mb-10 mx-6">
    <button
      id="build"
      class="text-sm bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
    >
      build
    </button>
  </div>
    `

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = htmlString
  }
}
