import classNames from 'classnames/bind';
import Menu, { MenuItems } from './Menu';
import styles from './Sidebar.module.scss';
import config from '../../../../config';
import { HomeIcon, HomeActiveIcon, UserGroupActiveIcon, UserGroupIcon, LiveIcon, LiveActiveIcon } from '../../../Icons';

import SuggestedAccount from '../../../SuggestedAccount';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    className={cx('home')}
                    title="For You"
                    icon={<HomeIcon />}
                    actionIcon={<HomeActiveIcon />}
                    to={config.routes.home}
                ></MenuItems>
                {/* {console.log(test)} */}
                <MenuItems
                    className={cx('following')}
                    title="Following"
                    icon={<UserGroupIcon />}
                    actionIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                ></MenuItems>
                {console.log()}

                <MenuItems
                    className={cx('live')}
                    title="LIVE"
                    icon={<LiveIcon />}
                    actionIcon={<LiveActiveIcon />}
                    to={config.routes.live}
                ></MenuItems>
            </Menu>
            <span className={cx('border-bottom')}></span>

            <SuggestedAccount label="Tài khoản được đề xuất" />

            <SuggestedAccount label="Tài khoản được follow" />
            <SuggestedAccount label="Tài khoản được follow" />

            <SuggestedAccount label="Tài khoản được follow" />
            <SuggestedAccount label="Tài khoản được follow" />

            <SuggestedAccount label="Tài khoản được follow" />

            <SuggestedAccount label="Tài khoản được follow" />

            <SuggestedAccount label="Tài khoản được follow" />
        </aside>
    );
}

export default Sidebar;
