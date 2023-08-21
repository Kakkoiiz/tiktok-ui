import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>

       
        <img className={cx('logo_img')} src='https://i.pinimg.com/736x/9c/d5/b4/9cd5b4fcd004dd7e48ab0deb20052705.jpg' />

        <div className={cx('search')}>
          <input placeholder='Search accounts and videos' />

          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

        </div>

        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
