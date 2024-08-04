export const inject = (css: string): void => {
  const style = window.document.createElement('style')
  style.textContent = css
  window.document.head.appendChild(style)
}
