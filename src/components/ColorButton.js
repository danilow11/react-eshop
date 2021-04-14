import { FaCheck } from 'react-icons/fa';

const ColorButton = ({ color, activeColor, setActiveColor }) => {
  let btnClass = 'color-btn';
  let btnContent = null;
  if (activeColor === color) {
    btnClass += ' active';
    btnContent = <FaCheck />;
  }

  return (
    <button
      className={btnClass}
      style={{ background: color }}
      onClick={setActiveColor}
      name='color'
      data-color={color}
    >
      {btnContent}
    </button>
  );
};

export default ColorButton;
