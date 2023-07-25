import React from 'react';

interface DropdownProps {
    visibility: Boolean;
    children: JSX.Element |  JSX.Element[];
}

const Dropdown = (props: DropdownProps) => {
    const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
    const [repeat, setRepeat] = React.useState(0);

    React.useEffect(() => {
        if (props.visibility) {
            clearTimeout(repeat);
            setRepeat(0);
            setVisibilityAnimation(true);
        } else {
            let timeoutId: number;
            timeoutId = window.setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400);
            setRepeat(timeoutId);
        }
    }, [props.visibility]);

    return (
        <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            { visibilityAnimation && props.children }
        </article>
    )
};

export default Dropdown;