import Box from "../Box";
import List from "../List";
import { Details ,Summary, WatchedItem} from "./component";


export function Watched() {
   return (
      <Box>
      <Details/>
      <Summary/>
      <List>
        <WatchedItem/>
      </List>
      </Box>
   )
 }
 
 