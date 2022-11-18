import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcccountItems from '../AccountItems';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { faCircleXmark, faSpinner, faSearch, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { useDebound } from '../../../hook';

import axios from 'axios';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    // Set dữ liệu trong ô input
    const [searchResults, setSearchResults] = useState([]);
    // Call API sau đó setdk để show kết quả
    const [showResult, setShowResult] = useState(true);

    const [loading, setLoading] = useState(false);
    // show and hidden
    const deBoundced = useDebound(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!deBoundced) {
            return;
        } else {
            setLoading(true);

            axios
                .get(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(deBoundced)}&type=less`)
                .then((res) => {
                    setSearchResults(res.data.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }, [deBoundced]);

    console.log(searchValue);

    //logic Show Hide

    return (
        <HeadlessTippy
            visible={showResult && searchResults?.length > 0 && deBoundced?.length > 0}
            interactive
            onClickOutside={() => {
                setShowResult(false);
            }}
            render={(attrs) => (
                <div className={cx('box-search')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('box-list_account')}>Acccount</div>
                        {searchResults.map((result) => {
                            {
                                console.log(result);
                            }
                            return <AcccountItems key={result.id} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <div className={cx('inner')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                                //// Xoá đi và sau đó focus lại input
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading_btn')} icon={faSpinner} />}
                    <span className={cx('border_right')}></span>

                    <button className={cx('search_btn')}>
                        <FontAwesomeIcon className={cx('search_btn-font')} icon={faSearch} />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
