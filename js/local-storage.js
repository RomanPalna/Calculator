export function storeData(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export function getData(key) {
  JSON.parse(window.localStorage.getItem(key));
}

export function clearData() {
  window.localStorage.clear();
}
