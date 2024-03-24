import {useState} from 'react';

interface IconButtonProps {
    icon: (isActive: boolean) => JSX.Element
    text?: string;
    active?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({icon, text, active = false}) => {
    const [isActive, setIsActive] = useState<boolean>(active);

    const handleButtonClick = () => setIsActive(prevState => !prevState);


    return (
        <button className="flex items-center space-x-1 text-gray-600" onClick={handleButtonClick}>
            {icon(isActive)}
            {text}
        </button>
    );
};

export default IconButton;
