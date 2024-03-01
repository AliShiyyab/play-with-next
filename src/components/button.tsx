interface ButtonInterface {
    ButtonStyle: string;
    clickingAction: () => void;
    buttonName: string | null;
}

const Button = ({ButtonStyle, clickingAction, buttonName}: ButtonInterface) => {
    return (
        <button className={ButtonStyle} onClick={clickingAction}>
            {buttonName ? buttonName : "Submit"}
        </button>
    );
}

export default Button;