// A mock function to mimic making an async request for data
const fetchJSON = (input, init) => fetch(input, init).then(res => res.json())

export function fetchGasInfo() {
  return fetchJSON("https://ethgasstation.info/api/ethgasAPI.json")
}
	