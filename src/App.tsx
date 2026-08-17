import { Link, Outlet } from "react-router"


function App() {

  return (
    <>
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link>
            <Outlet />
        </nav>
        <nav>
          
        </nav>
        
    </>
  )
}

export default App
