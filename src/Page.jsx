import Background from "./Components/background/Background"
import Dress from "./Components/outfits/Dress"
import Pose from "./Components/Pose/Pose"
import Sidebar from './Components/Sidebar/Sidebar'
import AllHead from './Components/AllHead'

import './Page.css'

function App(){
  return(
<>
<AllHead />
<div className="PageStyle">
<div className="stylePart1">
  <Sidebar/>
</div>
<div className="stylePart2">
<Background/>
<Dress/>
<Pose />
</div>
</div>

     </>
     )
}
export default App