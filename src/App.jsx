
import { StudentsProvider } from './context/StudentsContext'
import StudentsProfilesPage from './pages/StudentsProfile/StudentsProfile'

const App = () => {
  return (
    <>
      <StudentsProvider>
        <StudentsProfilesPage />
      </StudentsProvider>
    </>
  )
}
export default App 