import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.4rem;
  overflow-x: hidden;
  background: linear-gradient(
      ${(p) => p.theme.colors.homeBgColor},
      ${(p) => p.theme.colors.homeBgColor}
    ),
    url(${process.env.PUBLIC_URL}/images/bg1.jpg);
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
`;

export const AppDiv = styled.div`
  margin-top: 1.2rem;
  border-top: 1px solid ${(p) => p.theme.colors.textColorVeryLowOp};
  padding-top: 0.4rem;
  width: 80%;
`;

export const PhoneBookTitle = styled.h1`
  text-align: center;
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Robot", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: ${(props) => (props.open ? "0" : "18rem")};
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39.6rem;
  height: ${(props) => (props.open ? "18rem" : "0")};
  padding: ${(props) => (props.open ? "2.4rem 2.4rem 3.6rem" : "0")};
  background-color: ${(p) => p.theme.colors.phoneBookContainer};
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
`;

export const ContactsTitle = styled.h1`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  letter-spacing: 0.4rem;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke-width: 1px;
  text-shadow: 0 0.5rem 1rem ${(p) => p.theme.colors.inputHover};
`;

export const ContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

// export const Wrapper = styled.div`
//   width: 340px;
//   padding: ${(props) => (props.open ? "20px" : "0")};
//   background-color: ${(p) => p.theme.colors.mainBgColor};
//   border-radius: 12px;
//   box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;
