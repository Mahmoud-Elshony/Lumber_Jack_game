import { click } from '@testing-library/user-event/dist/click';
import Tree from './component/tree';
import { useState } from 'react';
export default function App() {
  const [clickDir,setClickDir] = useState({})
  // function mahmoud(data) {
  //   console.log(data)
  // }
  return (
    <div>
      <div className='right-section-click' onClick={()=>setClickDir({key:"ArrowRight"})}> </div>
      <div className='left-section-click' onClick={()=>setClickDir({key:"ArrowLeft"})}></div>

      <Tree ahmed={clickDir} />

    </div>
  )
}