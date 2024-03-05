export default class View {
  public generateElement(target: HTMLSelectElement, data: string): void {
    let element = document.createElement('option')
    element.value = data
    element.innerText = data
    target.append(element)
  }

  public generateComputer(gamingScore: number, workingScore: number, cpuObject: any, gpuObject: any, ramObject: any, storageObject: any): void {
    document.querySelector<HTMLDivElement>('#computer')!.innerHTML += `
    <div class="bg-gray-50 p-4 border border-gray-200 rounded-lg shrink-0 shadow-sm">
      <div>
        <div class="font-bold text-[#2d2d2d] text-xl">Gaming ${gamingScore}%</div>
        <div class="font-bold text-[#2d2d2d] text-xl">Working ${workingScore}%</div>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4">
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
          <div class="text-xs text-gray-400">メモリ</div>
          <div class="text-sm font-bold">15${ramObject.brand}6</div>
          <div class="text-sm font-bold">${ramObject.brand}</div>
        </div>
        <div>
          <div class="text-xs text-gray-400">・ストレージ</div>
          <div class="text-sm font-bold">${storageObject.type}</div>
          <div class="text-sm font-bold">${storageObject.brand}</div>
          <div class="text-sm font-bold">${storageObject.model}</div>
        </div>
      </div>
    </div>
    `
  }

  public renderInit(): void {
    let htmlString = `
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-[#2d2d2d] font-bold mb-2">CPU</h2>
    <div class="mx-6 border border-gray-200 rounded-lg bg-[#fafafa] shadow-sm">
      <div class="flex items-center border-b border-gray-200">
        <label for="cpu-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="cpu-brand" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-tr-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="cpu-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="cpu-model" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-br-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-[#2d2d2d] font-bold mb-2">GPU</h2>
    <div class="mx-6 border border-gray-200 rounded-lg bg-[#fafafa] shadow-sm">
      <div class="flex items-center border-b border-gray-200">
        <label for="gpu-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="gpu-brand" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-tr-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="gpu-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="gpu-model" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-br-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-[#2d2d2d] font-bold mb-2">メモリ</h2>
    <div class="mx-6 border border-gray-200 rounded-lg bg-[#fafafa] shadow-sm">
      <div class="flex items-center border-b border-gray-200">
        <label for="ram-num" class="flex items-center px-2 h-10 text-sm text-gray-400 whitespace-nowrap">how many</label>
        <select id="ram-num" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-tr-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="ram-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="ram-brand" class="w-full bg-transparent flex-auto pr-10 py-2 text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="ram-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="ram-model" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-br-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="mx-6 text-sm text-[#2d2d2d] font-bold mb-2">ストレージ</h2>
    <div class="mx-6 border border-gray-200 rounded-lg bg-[#fafafa] shadow-sm">
      <div class="flex items-center border-b border-gray-200">
        <label for="storage-type" class="flex items-center px-2 h-10 text-sm text-gray-400">type</label>
        <select id="storage-type" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-tr-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
          <option value="hdd">HDD</option>
          <option value="ssd">SSD</option>
        </select>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="storage-size" class="flex items-center px-2 h-10 text-sm text-gray-400">storage</label>
        <select id="storage-size" class="w-full bg-transparent flex-auto pr-10 py-2 text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="storage-brand" class="flex items-center px-2 h-10 text-sm text-gray-400">brand</label>
        <select id="storage-brand" class="w-full bg-transparent flex-auto pr-10 py-2 text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
      <div class="flex items-center">
        <label for="storage-model" class="flex items-center px-2 h-10 text-sm text-gray-400">model</label>
        <select id="storage-model" class="w-full bg-transparent flex-auto pr-10 py-2 rounded-br-lg text-sm focus-visible:outline-2 focus-visible:outline-sky-500">
          <option value="">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="mt-8 mb-10 mx-6">
    <button
      id="build"
      class="text-sm font-bold bg-sky-500 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-50 text-white font-semibold h-10 px-6 rounded w-full flex items-center justify-center sm:w-auto"
    >
      コンピュータを組み立てる
    </button>
  </div>

  <div id="computer" class="mx-6 grid grid-cols-1 lg:grid-cols-2 gap-4"></div>
    `

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = htmlString
  }
}
