import TextEditor from './TextEditor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

function App() {
  return(
    <Router>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <h2 style={{margin:"8px"}}>Qdoc</h2>
        <ul style={{display:"flex"}}>
          <li style={{margin:"8px",listStyle:"none"}}>settings</li>
          <li style={{margin:"8px",listStyle:"none"}}>functions</li>
          <li style={{margin:"8px",listStyle:"none"}}>accounts</li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;