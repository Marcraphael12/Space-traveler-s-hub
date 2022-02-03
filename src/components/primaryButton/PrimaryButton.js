import './primary-button.scss';

const PrimaryButton = ({ children, unactive, ...otherProps }) => (
  <button
    className={`primary-button ${unactive ? 'primary-button--unactive' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);
export default PrimaryButton;
