export default class View {
  public generateElement(target: HTMLSelectElement, data: string): void {
    let element = document.createElement('option')
    element.value = data
    element.innerText = data
    target.append(element)
  }
}
