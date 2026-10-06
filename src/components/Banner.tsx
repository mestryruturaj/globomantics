import GloboLogo from "../assets/GloboLogo.png";
import styles from "./Banner.module.css";

const { appLogo } = styles;

interface BannerProps {
    headerText: string;
}

function Banner(props: BannerProps):React.JSX.Element {
    return (
        <>
            <header className="row mb-4">
                <div className="col-5">
                    <img src={GloboLogo} className={appLogo} alt="logo" />
                </div>
                <div className="col-7 mt-5">
                    {props.headerText}
                </div>
            </header>
        </>
    );
}

export default Banner;