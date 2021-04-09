import React from "react"
import store from "app/store"
import { Provider } from "react-redux"
import { TinaProvider, TinaCMS } from "tinacms"
import {
  GithubClient,
  GithubMediaStore,
  TinacmsGithubProvider,
} from "react-tinacms-github"
const authServer = `http://localhost:4000`

const githubClient = new GithubClient({
  proxy: `${authServer}/api/proxy-github`,
  authCallbackRoute: `${authServer}/api/create-github-access-token`,
  clientId: process.env.GITHUB_CLIENT_ID,
  baseRepoFullName: process.env.REPO_FULL_NAME,
  authScope: "repo",
})
const mediaStore = new GithubMediaStore(githubClient)

const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null
  const headers = new Headers()

  if (token) {
    headers.append("Authorization", "Bearer " + token)
  }

  const resp = await fetch(`${authServer}/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`${authServer}/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  const cms = new TinaCMS({
    sidebar: true,
    apis: {
      github: githubClient,
    },
    media: mediaStore,
  })
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={store}>
      <TinaProvider cms={cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          // error={pageProps}
        >
          {element}
        </TinacmsGithubProvider>
      </TinaProvider>
    </Provider>
  )
}
