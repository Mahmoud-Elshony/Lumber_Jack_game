import React, { useState, useEffect} from 'react';
import Lumber from './lumber';
import GameComponent from './lives';
import './lumberstyle.css';
import hittingSound from './sounds/hitting.mp3';
import collisionSound from './sounds/collision.mp3';

const playHittingSound = new Audio(hittingSound);
const playCollisionSound = new Audio(collisionSound);

function MyComponent({ahmed}) {
  const numberOfBranch = 30;
  const [branchList, setBranchList] =
    useState(Array(numberOfBranch).fill(0).map((element, index) =>
      index % 2 === 0 ? Math.floor(Math.random() * 2) + 1 : element
    ));
  const [branchTop, setBranchTop] = useState(((numberOfBranch / 2) - 4) * -27);
  const [fadeOut, setFadeOut] = useState(false);
  const [lives, setLives] = useState(3);
  const [isEventStopped, setIsEventStopped] = useState(false);
  const [isEventCutStopped, setIsEventCutStopped] = useState(false);
  const handleCharacterDeath = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }
  };

  const handleFadeOut = () => {
    setFadeOut(true);
  };
  const moveWithClick =useEffect(()=>{
    if(Object.keys(ahmed).length>0){
      handleKeyDown(ahmed)
    }
  },[ahmed])

  const handleKeyDown = (event)=>{
    
    console.log(event.key)
    if (!isEventStopped && !isEventCutStopped) {
      if (branchList.slice(-2)[0] === 0) {
        removeLastBranch(event.key === 'ArrowRight');
        if (branchList.slice(-3)[0] === 2 && event.key === 'ArrowRight') {
          manCollision(event.key === 'ArrowRight');
        } else if (branchList.slice(-3)[0] === 1 && event.key === 'ArrowLeft') {
          manCollision(event.key === 'ArrowRight');
        }
      } else {
        if (event.key === 'ArrowLeft' && branchList.slice(-2)[0] === 2) {
          removeLastBranch(false);
        } else if (event.key === 'ArrowRight' && branchList.slice(-2)[0] === 1) {
          removeLastBranch(true);
        } else if (
          (event.key === 'ArrowLeft' && branchList.slice(-2)[0] === 1) ||
          (event.key === 'ArrowRight' && branchList.slice(-2)[0] === 2)
        ) {
          manCollision(event.key === 'ArrowRight');
        }
      }
    }
  }
  

  const manCollision = (manDir) => {
    playCollisionSound.play();
    handleCharacterDeath();
    //

    setIsEventStopped(true);

    //
    if (manDir) {
      document.getElementById('man').classList.add('right', 'collision-man');
      setTimeout(() => {
        document.getElementById('man').classList.remove('right', 'collision-man');
        setIsEventStopped(false);
      }, 2341);
    } else {
      document.getElementById('man').classList.remove('right');
      document.getElementById('man').classList.add('collision-man');

      setTimeout(() => {
        document.getElementById('man').classList.remove('collision-man');
        document.getElementById('man').classList.add('right');
        setIsEventStopped(false);
      }, 2341);
    }
  };

  const removeLastBranch = (manDir) => {
    if (branchList.length > 0 && !isEventStopped && !isEventCutStopped) {
      playHittingSound.play();
      const updatedBranchList = [...branchList];
      updatedBranchList.pop();
      setBranchTop((branchTop) => branchTop + 13);
      handleFadeOut();
      setBranchList(updatedBranchList);
      ////
      if (!isEventStopped && !isEventCutStopped) {
        setIsEventCutStopped(true)
        setTimeout(() => {
          setIsEventCutStopped(false)
        }, 140);
        if (manDir) {
          document.getElementById('man').classList.add('right', 'hitting-right');
          setTimeout(() => {
            document.getElementById('man').classList.remove('hitting-right');
          }, 143);
        } else {
          document.getElementById('man').classList.remove('right');
          document.getElementById('man').classList.add('hitting-right');

          setTimeout(() => document.getElementById('man').classList.remove('hitting-right'), 143);
        }
      }

    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [branchList, isEventStopped]);

  return (
    <div className='tree'>
      {branchList.map((branch, index) =>
        branch === 0 ? (
          <div style={{ height: '13%' }} key={index}></div>
        ) : (
          <div
            key={index}
            style={{ top: `${branchTop}%` }}
            className={`game__foreground ${index === branchList.length - 1 && fadeOut ? 'fade-out' : ''
              } ${branch === 1 ? 'left' : 'right'}`}
          >
            <div className='branch'>
              <div className='rec'></div>
              <div className='rec'></div>
              <div className='circle'></div>
            </div>
          </div>
        )
      )}
      <Lumber manDir={branchList} />
      <GameComponent lives={lives} />
    </div>
  );
}

export default MyComponent;
