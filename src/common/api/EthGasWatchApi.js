// this proxy is also good but they do some caching or something
// which gives back old/inaccurate data

const fetchFromAllOriginsProxyJSON = (input, init) =>
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(input)}`, init)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error("Network response was not ok.")
    })
    .then(data => JSON.parse(data.contents))

// Prefer this for fetching or create own proxy
const fetchFromThingProxy = (input, init) =>
  fetch(`https://thingproxy.freeboard.io/fetch/${input}`, init).then(
    response => {
      if (response.ok) return response.json()
      throw new Error("Network response was not ok.")
    }
  )

// here you can easily switch the proxy you want to use
const fetchProxy = fetchFromAllOriginsProxyJSON

// since there the ethgas.watch doesn't have Access-Control-Allow-Origin": "*"
// or API keys in order to access this from the browser we need to use a cors proxy
// some proxy options: https://nordicapis.com/10-free-to-use-cors-proxies/
// or in the future this can be ran in house
// Here is the ethGasWatch repo: https://github.com/wslyvh/ethgaswatch
export default class EthGasWatchApi {
  constructor() {
    this.SERVER_ENDPOINT = "https://ethgas.watch/api"
  }

  fetchGasInfo() {
    return fetchProxy(`${this.SERVER_ENDPOINT}/gas`)
  }

  fetchGasTrend({ days = 7, hours }) {
    return fetchProxy(
      `${this.SERVER_ENDPOINT}/gas/trend?${new URLSearchParams({
        days,
        hours,
      })}`
    )
  }
}
