import imageSrc from './../../../assets/go-pro.png';
import classes from './GoPro.module.css';

const GoPro = () => {
  return (
    <div className={classes.GoPro}>
      <img src={imageSrc} alt="" />
      <p>Go Pro Upgrade Now</p>
      <span>$1</span>
    </div>
  );
};

export default GoPro;
