import { useState } from "react"
import ActiveInput from "./components/ActiveInput/ActiveInput"

const App = () => {
  const [value, setValue] = useState()

  return (
    <div>
      <ActiveInput onChange={e => setValue(e.target.value)} value={value} />
    </div>
  )
}

export default App