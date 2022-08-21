import { LoginPageStyle, MainButton } from "../styles/login";
import { API_URL } from "../utils/services";

export const LoginPage = () => {
  const redirect = () => {
    window.location.href = `${API_URL}/auth`;
  };
  return (
    <LoginPageStyle>
      <div></div>
      <div>
        <MainButton onClick={redirect}>
          <p style={{ fontSize: "18px" }}>Login with Discord</p>
        </MainButton>
        <MainButton>
          <p style={{ fontSize: "18px" }}>Support Server</p>
        </MainButton>
      </div>
      <div
        style={{
          display: "flex",
          width: "400px",
          justifyContent: "space-between",
        }}
      >
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Contact Us</span>
      </div>
    </LoginPageStyle>
  );
};
