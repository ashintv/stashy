import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/dashboard"
import { useLoading } from "./state/store"

import { Loading } from "./components/loading"

function App() {
  const loading = useLoading()
  return (

    <BrowserRouter >
     {loading.loading && <Loading/>}
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App