import ActiveButton from "./components/ActiveButton/ActiveButton"
import SecondaryButton from "./components/SecondaryButton/SecondaryButton"

const App = () => {
  return (
    <div>
      <ActiveButton>
        Найти
      </ActiveButton>
      <SecondaryButton>
        Войти
      </SecondaryButton>
    </div>
  )
}

export default App