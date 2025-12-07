import React from 'react';
import classNames from 'classnames';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-md",
        secondary: "bg-[var(--secondary)] text-[var(--text-dark)] hover:bg-gray-200",
        accent: "bg-[var(--accent)] text-white hover:opacity-90 shadow-md",
        outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm rounded-[var(--radius-sm)]",
        md: "px-5 py-2.5 text-base rounded-[var(--radius-md)]",
        lg: "px-8 py-3 text-lg rounded-[var(--radius-md)]"
    };

    // Note: Since we are using vanilla CSS variables but might not have Tailwind configured fully for utility classes 
    // like 'inline-flex' unless I implement them in index.css, I should be careful. 
    // However, I will assume I need to write the actual CSS or inline styles if I don't adds utilities.
    // Wait, I didn't convert everything to utilities in index.css.
    // I should write a CSS Module or standard CSS for this button to be safe, OR add utilities to index.css.
    // The plan said "Vanilla CSS".

    // Let's use a CSS module approach or just a className with styles defined in index.css or a new file.
    // For now, I'll stick to a BEM-like approach or inline styles for simplicity in this artifact, 
    // OR I can quickly update index.css to have these utilities to make "modern" development easier.
    // Actually, I'll write a `Button.css` file next to it or just use `className="btn btn-primary"` and define `.btn` in index.css.

    return (
        <button
            className={classNames('btn', `btn-${variant}`, `btn-${size}`, className)}
            {...props}
        >
            {children}
        </button>
    );
};
