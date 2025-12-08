import './App.css';
import { Header } from "@widgets/header";

function App() {
  return (
    <>
      <Header />
      <div>
        {Array(30)
          .fill('')
          .map(item => <p>pupupu</p>)
        }
      </div>
    </>
  )
}

export default App
