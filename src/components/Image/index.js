import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(fallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      alt={alt}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
