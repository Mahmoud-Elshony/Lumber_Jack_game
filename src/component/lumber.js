import { useEffect } from "react"
export default function Lumber(props) {
    useEffect(() => {
        const LumberMan = document.getElementById('man');
        if (props.manDir.slice(-2)[0] === 1) {

            LumberMan.classList.add('right')
        }
    }, [])

    return <div id='man' className={`man`} >
        <div className="head">
            <div className="hat">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
            <div className="face">
                <div className="skin"></div>
                <div className="eyes">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="beared"></div>
                <div className="mouth"></div>
            </div>
        </div>
        <div className="axe">
            <div className="stick"></div>
            <div className="metal"></div>
        </div>
        <div className="body">
            <div className="upper">
                <div className="arms">
                    <div className="left-arm">
                        <div className="arm"></div>
                        <div className="hand"></div>
                    </div>
                    <div className="right-arm">
                        <div className="arm"></div>
                        <div className="hand"></div>
                    </div>
                </div>
                <div className="chest"></div>
            </div>
            <div className="lower">
                <div className="legs">
                    <div className="left-leg">
                        <div className="leg"></div>
                        <div className="shoe"></div>
                    </div>
                    <div className="right-leg">
                        <div className="leg"></div>
                        <div className="shoe"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}