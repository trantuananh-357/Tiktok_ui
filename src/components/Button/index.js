import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    sameIcon = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    outline = false,
    leftIcon = false,
    rigthIcon = false,

    className,

    rounded = false,
    ...passProps
}) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    } else if (primary) {
        props.primary = primary;
    } else if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        sameIcon,
        small,
        large,
        text,
        disabled,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rigthIcon && <span className={cx('icon')}>{rigthIcon}</span>}
        </Comp>
    );
}

export default Button;
