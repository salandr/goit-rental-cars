import sprite from '../../assets/images/sprite.svg';

const AlcoveIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-alcove`}></use>
    </svg>
  );
};

export default AlcoveIcon;
