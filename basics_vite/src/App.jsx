
import Test  from "./test"
function App() {
 

  return (
    <>  // This is a fragment, it allows us to group multiple elements without adding extra nodes to the DOM
   <Test/>
   <p>Testing the fragment</p>
   <h2>Hey there, learning new concepts</h2>
   </>
  )
}

export default App
