interface IButtonProps {
    children: string | React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    type?: 'primary' | 'secondary' | 'link';
}

export const primaryBaseStyle = `w-full text-center py-1.5 text-xs bg-[color:var(--color-main)] text-[color:var(--color-bg)] border-none 
    rounded-md cursor-pointer font-semibold item-center`;

export const secondaryBaseStyle = `w-full text-center p-1 text-xs bg-[color:var(--color-white)] text-[color:var(--color-main)] border-none 
    rounded-md cursor-pointer font-semibold`;

export const linkBaseStyle = `w-full text-center p-1 text-xs bg-transparent text-[color:var(--color-main)] border-none 
    rounded-md cursor-pointer  font-semibold`;

const typeConfigs = {
    primary: primaryBaseStyle,
    secondary: secondaryBaseStyle,
    link: linkBaseStyle,
};

const Button: React.FC<IButtonProps> = ({ children, icon, onClick, type, ...props }) => {
    return (
        <button className={`${typeConfigs[type ? type : 'primary']}`} onClick={onClick} {...props}>
            {icon ? <span className={`mr-1.5`}>{icon}</span> : null}
            {children}
        </button>
    );
};

export default Button;
