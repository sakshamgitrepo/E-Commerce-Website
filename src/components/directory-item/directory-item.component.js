import {  useNavigate } from 'react-router-dom';
import './directory-item.styles.scss'

const DirectoryItem =({category})=>{
    const {imageUrl,title} = category;
    const navigate = useNavigate();
return(
    <div className="directory-item-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="directory-body-container" onClick={()=>navigate(`/shop/${title}`)}>
      <h2>{title.toUpperCase()}</h2>
      <p>Shop Now</p>
      
    </div>
  </div>
)
}

export default DirectoryItem;