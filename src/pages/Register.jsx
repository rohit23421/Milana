import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/4530799/pexels-photo-4530799.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=650")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: lightblue;
  border-radius: 20px;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-weight: 500;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Lat Name" />
          <Input placeholder="Username" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
