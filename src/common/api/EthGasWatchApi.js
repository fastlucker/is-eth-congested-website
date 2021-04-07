const fetchProxyJSON = (input, init) =>
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(input)}`, init)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error("Network response was not ok.")
    })
    .then(data => JSON.parse(data.contents))

export default class EthGasWatchApi {
  constructor() {
    this.SERVER_ENDPOINT = "https://ethgas.watch/api"
  }

  fetchGasInfo() {
    return fetchProxyJSON(`${this.SERVER_ENDPOINT}/gas`)
  }

  fetchGasTrend({ days = 7, hours }) {
    return fetchProxyJSON(
      `${this.SERVER_ENDPOINT}/gas/trend?${new URLSearchParams({
        days,
        hours,
      })}`
    )
  }
}
