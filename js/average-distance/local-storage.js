function storeData(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  JSON.parse(window.localStorage.getItem(key));
}

export default { storeData, getData };
