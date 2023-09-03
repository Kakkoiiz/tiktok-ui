import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles)

function AccountsItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://i.pinimg.com/564x/39/7c/44/397c448c90b5025f986cbb05ec8d3403.jpg" alt="Ha" />
            <div className={cx('info')} >
                <p className={cx('name')}>
                    <span>Dungdz</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>Dungdz1st</span>
            </div>
        </div>
    );
        
}

export default AccountsItem;