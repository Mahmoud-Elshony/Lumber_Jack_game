import './LivesComponent.css'; // استيراد ملف CSS

function GameComponent(props) {


    return (
        <div className="game-container">
            <div className="lives">
                <br></br>
                <br></br>
                <div className="heart-icons">
                    {[...Array(props.lives)].map((_, index) => (
                        <span key={index} className="heart" role="img" aria-label="Heart">
                            ❤️
                        </span>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default GameComponent;
