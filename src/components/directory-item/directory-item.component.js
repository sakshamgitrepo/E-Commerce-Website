import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const onNavigateHandler = () => {
   {currentUser ? navigate(route):navigate("/sign-in-page")}
  };
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
        <div className="directory-body-container" onClick={onNavigateHandler}>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </div>
     
    </div>
  );
};

export default DirectoryItem;
