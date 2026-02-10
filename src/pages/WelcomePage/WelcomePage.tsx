import { Button } from "antd";
import mainImage from "../../assets/mainImage.jpg";
import "./WelcomePage.css";
import "./Button.css";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../transitin";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="container-content">
            <h1 className="st-title">
              Ласкаво просимо, фанате Stranger Things!
            </h1>
            <img className="st-image" src={mainImage} alt="main-image" />
            <div className="st-button-container">
              <Button
                className="st-button welcome-button"
                color="red"
                variant="solid"
                onClick={handleClick}
              >
                Дізнайся, хто ти із "Дивних Див"
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default WelcomePage;
