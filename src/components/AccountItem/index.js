import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031e861b377f05c9f3c19a67d7f53df9~c5_300x300.webp?x-expires=1664017200&x-signature=aobSqXW1Wxo%2BAWkUn5yFA40PmX4%3D"
                alt="Thoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Việt Phương Thoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Viet Phuong Thoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
