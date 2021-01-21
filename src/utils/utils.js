export function isTaskFormValid(form) {
  return Object.keys(form).filter((key) => {!form[key].value}).length === 0
}

export function getStorageObject(name) {
  let objectInStore = null
  if (localStorage.getItem(name)) {
     objectInStore = JSON.parse(localStorage.getItem(name))
  }
  return objectInStore
}

export function setStorageObject(name, vakue) {
  localStorage.setItem(name, JSON.stringify(vakue))
}

export function getLocaleDate(date) {
  return new Date(date).toLocaleDateString()
}

export function isPast(date) {
  return new Date(date) < new Date().setHours(0, 0, 0, 0)
}