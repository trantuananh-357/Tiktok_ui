import classNames from 'classnames/bind';
import styles from './AccountPreView.module.scss';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreView() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    alt="meooo"
                    className={cx('avata-user_tippy')}
                    src="https://images.unsplash.com/photo-1507299608771-aff42f6ee216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('user')}>
                    <span className={cx('user-nickName')}>tuanahhnguyen</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </div>
                <a className={cx('user-realName')}>Nguyễn Tuấn Anh</a>
                <div className={cx('analytics')}>
                    <div className={cx('total_follow')}>
                        <span className={cx('follower')}>100M</span>
                        <span>Follower</span>
                    </div>
                    <div className={cx('total_like')}>
                        <span className={cx('liker')}>583.5M</span>
                        <span>Liker</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPreView;
