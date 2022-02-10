/* eslint-disable react/jsx-props-no-spreading */
const Input = ({ type, ...rest }) => <input type={type} {...rest} />;

export default Input;
