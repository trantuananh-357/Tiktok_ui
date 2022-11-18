import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../../Popper/Menu';

import {
    MessagesIcon,
    MailBox,
    ProfileIcon,
    GetCoin,
    ViewAnalysis,
    LiveStudio,
    Setting,
    LogOut,
    Languages,
    Responsive,
    ShortCut,
    DarkMode,
} from '../../../Icons';

import { useEffect, useState } from 'react';

import Button from '../../../Button';
import Images from '../../../Images';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Languages />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'languages',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'languages',

                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <Responsive />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <ShortCut />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <DarkMode />,
        title: 'Chế độ tối',
    },
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <GetCoin />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <ViewAnalysis />,
        title: 'View Analysis',
        to: '/viewanalysis',
    },
    {
        icon: <LiveStudio />,
        title: 'LiveStudio',
        to: '/livestudio',
    },
    {
        icon: <Setting />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOut />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
console.log(MessagesIcon);
function Header() {
    const handleMenuChange = (MenuItems) => {
        console.log(MenuItems.type);
    };
    // Login Out  - Login In
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <div className={cx('currentUser')}>
                                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                    Upload
                                </Button>
                            </div>

                            <Tippy delay={[0, 100]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('user-messsage')}>
                                    <MessagesIcon className={cx('message-btn')} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 100]} content="Hộp Thư" placement="bottom">
                                <button className={cx('user-mailBox')}>
                                    <MailBox className={cx('mailBox-btn')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log In
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src="https://images.unsplash.com/photo-1663349487048-34ae9121f440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt="Trần Tuấn Anh"
                            />
                        ) : (
                            <button className={cx('btn_menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
