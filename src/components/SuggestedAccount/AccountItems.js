import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import AccountPreView from './AccountPreview/AccountPreView';
import { Wrapper as PopperWrapper } from '../Popper';
const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div>
            <Tippy
                className={cx('tippy-border')}
                delay={[800, 0]}
                interactive
                offset={[-20, 0]}
                placement="bottom"
                render={(props) => {
                    return (
                        <div tabIndex="-1" {...props}>
                            <PopperWrapper>
                                <AccountPreView />
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                <div className={cx('account')}>
                    <img
                        alt="user"
                        src="https://images.unsplash.com/photo-1507299608771-aff42f6ee216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                        className={cx('user-avata')}
                    />
                    <div className={cx('user-name')}>
                        <div className={cx('user-nickName')}>
                            <strong>TUANANH</strong>
                            <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                        </div>
                        <div className={cx('user-realName')}>TUANANH</div>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItems;
