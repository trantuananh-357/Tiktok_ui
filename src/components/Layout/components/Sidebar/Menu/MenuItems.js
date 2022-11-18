import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { HomeIcon } from '../../../../Icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function MenuItems({ icon, actionIcon, title, to }) {
    // console.log(icon);

    return (
        <NavLink className={(nav) => cx('menu-items', { action: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('action_icon')}>{actionIcon}</span>

            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default MenuItems;
