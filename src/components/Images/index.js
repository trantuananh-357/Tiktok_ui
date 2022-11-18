import { forwardRef, useState } from 'react';
import images from '../../assets/images';
console.log(images.imagesDefault);
const Images = forwardRef(({ src, alt, ...props }, ref) => {
    const [beError, setBeError] = useState('');
    const handlError = () => {
        setBeError(images.imagesDefault);
    };
    return <img src={beError || src} {...props} ref={ref} onError={handlError} />;
});

export default Images;
