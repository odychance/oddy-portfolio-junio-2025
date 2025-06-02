export const SplitText = (element) => {
  if (!element || !element.current) return

  const text = element.current.innerText
  const splitTextArray = text.split(" ")
  console.log("algo")

  element.current.innerHTML = ""
  splitTextArray.forEach((word) => {
    const span = document.createElement("span")
    span.innerText = word
    element.current.appendChild(span)
    element.current.appendChild(document.createTextNode(" "))
  })
}
