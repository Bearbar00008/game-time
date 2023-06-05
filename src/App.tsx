import { Provider } from "react-redux"

import { appStore } from "./store/store"

import { Home } from "./pages"

function App() {
  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  )
}

export default App
