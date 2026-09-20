import GloboLogo from "../assets/GloboLogo.png";

function Banner():React.JSX.Element {
    return (
        <>
            <header className="row">
                <div className="col-5">
                    <img src={GloboLogo} alt="logo" />
                </div>
                <div className="col-7">
                    Providing houses all over the world
                </div>
            </header>
        </>
    );
}

export default Banner;