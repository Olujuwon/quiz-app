import { ReactNode } from 'react';

interface TypographyProps {
    children: string | ReactNode;
    className?: string;
}

export const BodyText: React.FC<TypographyProps> = ({ children, className, ...props }) => {
    return (
        <p className={`font-normal text-sm text-[color:var(--color-dark)] ${className ? className : ''}`} {...props}>
            {children}
        </p>
    );
};

export const MediumBodyText: React.FC<TypographyProps> = ({ children, className, ...props }) => {
    return (
        <p className={`font-normal text-base text-[color:var(--color-dark)] ${className ? className : ''}`} {...props}>
            {children}
        </p>
    );
};

export const SmallBodyText: React.FC<TypographyProps> = ({ children, className, ...props }) => {
    return (
        <p className={`font-normal text-sm text-[color:var(--color-dark)] ${className ? className : ''}`} {...props}>
            {children}
        </p>
    );
};

export const SmallBodyTextBold: React.FC<TypographyProps> = ({ children, className, ...props }) => {
    return (
        <p className={`font-bold text-sm text-[color:var(--color-dark)] ${className ? className : ''}`} {...props}>
            {children}
        </p>
    );
};

export const LargeHeaderTextBold: React.FC<TypographyProps> = ({ children, className, ...props }) => {
    return (
        <p className={`font-bold text-xl text-[color:var(--color-dark)] ${className ? className : ''}`} {...props}>
            {children}
        </p>
    );
};

export const MediumHeaderTextBold: React.FC<TypographyProps> = ({ children, className, ...props }) => {
    return (
        <p className={`font-bold text-base text-[color:var(--color-dark)] ${className ? className : ''}`} {...props}>
            {children}
        </p>
    );
};
