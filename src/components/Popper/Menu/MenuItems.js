import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    const classes = cx('menu', { separate: data.separate });
    return (
        <Button className={cx(classes)} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
