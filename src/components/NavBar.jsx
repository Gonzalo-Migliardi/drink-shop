import { AppBar } from "@mui/material"
import CartWidget from "./CartWidget"
import { Wrapper, Right } from "./stylesComponents"

export default function Navbar(){
    return (
       <AppBar position="relative">
        <nav className="navbar navbar-expand-lg bg-light">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">Drink Shop</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="#">Alcohol</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Cervezas</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Vinos</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Sin Alcohol</a>
             </li>
           </ul>
           <Right>
            <CartWidget />
           </Right>
         </div>
       </div>
     </nav>
     </AppBar>
       
    )
}