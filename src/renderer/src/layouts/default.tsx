import { Routes } from '../Routes'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

function App(): JSX.Element {
  return (
    <>
      <div className="h-screen w-screen text-rotion-100 flex flex-row bg-rotion-900">
        <Sidebar />
        <div className="flex-1 flex-col flex max-h-screen">
          <Header />
          <Routes />
        </div>
      </div>
    </>
  )
}

export default App
