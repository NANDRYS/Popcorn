import Box from "../Box"
import List from "../List"
import MoviesItem from "./MovesItem"

export const Movie = () => {
   return (
      
            <Box>
            <p className="error">
              <span>⛔️</span> error
            </p>
            <List className={'list-movies'}>
              <MoviesItem/>
            </List>
          </Box>
   )
}