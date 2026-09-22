import GloboLogo from "../assets/GloboLogo.png";

function Banner():React.JSX.Element {
    return (
        <>
            <header>
                <div>
                    <img src={GloboLogo} alt="logo" />
                </div>
                <div>
                    Providing houses all over the world
                </div>
            </header>
        </>
    );
}

export default Banner;