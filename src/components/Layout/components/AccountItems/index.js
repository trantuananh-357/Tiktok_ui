import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AcccountItems({ data }) {
    console.log(data);
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <img src={data.avatar} className={cx('avatar-user')} atl={data.full_name} />
            <div className={cx('user_info')}>
                <div className={cx('user_name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <div className={cx('real_name')}>
                    <span>{data.full_name}</span>
                </div>
            </div>
        </Link>
    );
}

export default AcccountItems;
