export function computeLoadLength(dataLength, defaultLoadLength, loadCount) {
  const dataLengthModular = dataLength % defaultLoadLength

  switch (true) {
    case dataLength === defaultLoadLength * (loadCount - 1) + dataLengthModular:
      return dataLengthModular

    case dataLength >= defaultLoadLength * loadCount:
      return defaultLoadLength

    default:
      return
  }
}
