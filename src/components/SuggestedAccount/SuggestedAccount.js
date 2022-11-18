import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItems />
            <AccountItems />

            <AccountItems />
            <AccountItems />

            <p className={cx('viewMore')}>Xem thêm</p>
            <span className={cx('border-bottom')}></span>
        </div>
    );
}

export default SuggestedAccount;
