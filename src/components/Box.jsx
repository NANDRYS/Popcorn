const Box = ({children}) =>{
   return(
      <div className="box">
         <button className="btn-toggle">–</button>
         {children}
      </div>
   )
}

export default Box