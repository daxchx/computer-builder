export default class View {
  public generateElement(target: HTMLSelectElement, data: string): void {
    let element = document.createElement('option')
    element.value = data
    element.innerText = data
    target.append(element)
  }

  public generateComputer(gamingScore: number, workScore: number): void {
    let element = document.createElement('div')
    element.innerHTML = `
      <div>Your Computer</div>
      <div>Gaming ${gamingScore}%</div>
      <div>Work ${workScore}%</div>
    `
    document.querySelector<HTMLDivElement>('#computer')?.append(element)
  }
}
