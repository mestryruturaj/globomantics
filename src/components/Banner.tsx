import GloboLogo from "../assets/GloboLogo.png";

function Banner():React.JSX.Element {
    return (
        <>
            <header>
                <div>
                    <img src={GloboLogo} alt="logo" />
                </div>
            </header>
        </>
    );
}

export default Banner;