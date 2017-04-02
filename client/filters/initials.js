export default function () {
  return function (name) {
    const names = name.split(' ')
    const getInitial = (name) => name.substr(0, 1)

    if (names.length > 1) {
      return names.reduce(
        (firstName, nextName) => getInitial(firstName).toUpperCase() + getInitial(nextName).toUpperCase()
      )
    }

    return getInitial(name)
  }
}
