import { NavLink } from 'react-router-dom';
import './directory-item.styles.scss'

const DirectoryItem =({category})=>{
    const {imageUrl,title} = category;
return(
    <div className="directory-item-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="directory-body-container">
      <h2 style={{marginBottom : '.7rem'}}>{title.toUpperCase()}</h2>
      <NavLink to={`/shop/${title}`} style ={{fontWeight:'bold'}}>Shop Now</NavLink>
      
    </div>
  </div>
)
}

export default DirectoryItem;