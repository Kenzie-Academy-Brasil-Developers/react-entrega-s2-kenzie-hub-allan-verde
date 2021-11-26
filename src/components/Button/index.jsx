import { Container } from "./styles";

const Button = ({ color='blue' , children, type='button', ...rest }) => {
  return (
    <Container color={color} type={type} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
