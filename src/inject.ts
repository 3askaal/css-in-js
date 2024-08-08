let tag

export const inject = (cssString: string): void => {
  if (!tag) {
    tag = window.document.createElement('style')
    window.document.head.appendChild(tag)
  }

  tag.textContent += cssString
}
