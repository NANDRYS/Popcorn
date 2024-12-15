import NumResults from "./navigate/NumResults"
import Search from "./navigate/Search"

const NavBar  = () => {
   return(
      <nav className="nav-bar">
   <div className="logo">
     <span role="img">🍿</span>
     <h1>usePopcorn</h1>
   </div>
   <Search/>
    <NumResults/>
 </nav>
   )
   
}

export default NavBar