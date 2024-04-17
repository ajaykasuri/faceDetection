
import { useState } from 'react';
import './component.css'
import { useEffect } from 'react';
import NavBar from './navBar';
import ImgPost from './post';
//import Footer from './components/footer';
import faceImg from "./facial-recognition-icon-face-scanning-linear-design-vector.jpg"
function FrontPage(){
  const [file,setFile]=useState();
  const [image,setImage] = useState()
  
  useEffect(()=>{
    const getImage = ()=>{
      const img = new Image()
      img.src = URL.createObjectURL(file);
      img.onload =()=>{
        setImage({
          url : img.src,
          width : img.width,
          height : img.height
        })
      }
    }
    file && getImage()
  },[file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <NavBar/>
      
      {image ? (
        <ImgPost image={image}/>
      ) : (
      
        
      
        <div className='newPostCard'>
         {/* <img src={faceImg} className='imgPost'/> */}
          <div className='addpost'>
            <div>
              <label htmlFor='file' className="custom-upload-button">
                <span className="button-icon">📁</span>
                <span className="button-text">Upload</span>
              </label>
              <input
                onChange={handleFileChange}
                id="file"
                style={{display: "none"}}
                type="file"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FrontPage;
