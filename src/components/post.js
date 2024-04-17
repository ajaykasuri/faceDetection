 
// import React, { useState, useEffect, useRef } from 'react';
// import * as faceApi from "face-api.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmile, faSadTear, faAngry, faMeh, faFlushed, faDizzy, faSurprise } from '@fortawesome/free-solid-svg-icons';

// function ImgPost({ image }) {
//   const { url } = image;
//   const imgRef = useRef();
//   const canvasRef = useRef();
//   const [isLoading, setIsLoading] = useState(true);
//   const [expressions, setExpressions] = useState([]);
//   const [isDetecting, setIsDetecting] = useState(true);

//   const getExpressionIcon = (expression) => {
//     let icon;
//     let text;

//     switch (expression) {
//       case 'happy':
//         icon = <FontAwesomeIcon icon={faSmile} style={{ color: 'yellow' }} />;
//         text = 'Happy';
//         break;
//       case 'sad':
//         icon = <FontAwesomeIcon icon={faSadTear} style={{ color: 'blue' }} />;
//         text = 'Sad';
//         break;
//       case 'angry':
//         icon = <FontAwesomeIcon icon={faAngry} style={{ color: 'red' }} />;
//         text = 'Angry';
//         break;
//       case 'neutral':
//         icon = <FontAwesomeIcon icon={faMeh} style={{ color: 'gray' }} />;
//         text = 'Neutral';
//         break;
//       case 'fearful':
//         icon = <FontAwesomeIcon icon={faFlushed} style={{ color: 'Chartreuse' }} />;
//         text = 'Fearful';
//         break;
//       case 'disgusted':
//         icon = <FontAwesomeIcon icon={faDizzy} style={{ color: 'black' }} />;
//         text = 'Disgusted';
//         break;
//       case 'surprised':
//         icon = <FontAwesomeIcon icon={faSurprise} style={{ color: 'orange' }} />;
//         text = 'Surprised';
//         break;
//       default:
//         icon = null;
//         text = '';
//         break;
//     }

//     return { icon, text };
//   };

//   const handleImage = async () => {
//     try {
//       const detections = await faceApi.detectAllFaces(imgRef.current, new faceApi.TinyFaceDetectorOptions())
//         .withAgeAndGender()
//         .withFaceExpressions();

//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       canvas.innerHTML = faceApi.createCanvasFromMedia(imgRef.current);
//       faceApi.matchDimensions(canvas, { width: 500, height: 500 });

//       if (detections && detections.length > 0) {
//         const resized = faceApi.resizeResults(detections, { width: 500, height: 500 });
//         resized.forEach(({ detection, age, gender, expressions }) => {
//           const { _box } = detection;
//           ctx.beginPath();
//           //it will draw box..
//           ctx.rect(_box._x, _box._y, _box._width, _box._height);
//           //box color..
//           ctx.strokeStyle = 'blue';
//           ctx.lineWidth = 2;
//           //This line draws the stroke (outline) of the rectangle on the canvas.
//           ctx.stroke();
//           const x = _box._x;
//           const y = _box._y + _box._height + 20;
//           ctx.fillStyle = 'white';
//           ctx.font = '16px Arial';
//           ctx.fillText(`Age: ${Math.round(age)}`, x, y);
//           ctx.fillText(`Gender: ${gender}`, x, y + 20);
//         });
//         setExpressions(resized[0].expressions);
//         setIsDetecting(false);
//       } else {
//         setExpressions([]);
//         setIsDetecting(false);
//       }
//     } catch (error) {
//       console.error("Error handling image:", error);
//       setIsLoading(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         await Promise.all([
//           faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
//           faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
//           faceApi.nets.faceRecognitionNet.loadFromUri('/models'),
//           faceApi.nets.ageGenderNet.loadFromUri('/models'),
//           faceApi.nets.faceExpressionNet.loadFromUri('/models'),
//         ]);
//         handleImage();
//       } catch (error) {
//         console.error("Error loading models:", error);
//         setIsLoading(false);
//       }
//     };

//     imgRef.current && loadModels();
//   }, []);

//   const goBack = () => {
//     window.location.reload();
//   };

//   return (
//     <div className='bg'>
//       <div className='container'>
//         <div className='left'>
//           <img ref={imgRef} crossOrigin="anonymous" src={url} alt="" className="image" width={500} height={500} />
//           <canvas ref={canvasRef} width={500} height={500} className="canvas" />
//         </div>
//         <div className='right'>
//           {isLoading ? (
//             <h3>Detecting expressions...</h3>
//           ) : (
//             <h3>{isDetecting ? 'Detecting expressions...' : 'Expressions detected'}</h3>
//           )}
//           {!isDetecting && (
//             <ul>
//               {Object.entries(expressions).map(([expression, probability]) => (
//                 <li key={expression}>
//                   <span className="expression-icon">
//                     {getExpressionIcon(expression).icon}
//                   </span>
//                   <span className="expression-text" style={{ fontWeight: 'bold', color: 'blue' }}>
//                     {`${getExpressionIcon(expression).text} - ${Math.round(probability * 100)}%`}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <button onClick={goBack}>Go back</button>
//         </div>
//       </div>
//     </div>
//   );
// } 

// export default ImgPost;












 
import React, { useState, useEffect, useRef } from 'react';
import * as faceApi from "face-api.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadTear, faAngry, faMeh, faFlushed, faDizzy, faSurprise } from '@fortawesome/free-solid-svg-icons';

function ImgPost({ image }) {
  const { url } = image;
  const imgRef = useRef();
  const canvasRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [expressions, setExpressions] = useState([]);
  const [isDetecting, setIsDetecting] = useState(true);

  const getExpressionIcon = (expression) => {
    let icon;
    let text;

    switch (expression) {
      case 'happy':
        icon = <FontAwesomeIcon icon={faSmile} style={{ color: 'yellow' }} />;
        text = 'Happy';
        break;
      case 'sad':
        icon = <FontAwesomeIcon icon={faSadTear} style={{ color: 'blue' }} />;
        text = 'Sad';
        break;
      case 'angry':
        icon = <FontAwesomeIcon icon={faAngry} style={{ color: 'red' }} />;
        text = 'Angry';
        break;
      case 'neutral':
        icon = <FontAwesomeIcon icon={faMeh} style={{ color: 'gray' }} />;
        text = 'Neutral';
        break;
      case 'fearful':
        icon = <FontAwesomeIcon icon={faFlushed} style={{ color: 'Chartreuse' }} />;
        text = 'Fearful';
        break;
      case 'disgusted':
        icon = <FontAwesomeIcon icon={faDizzy} style={{ color: 'black' }} />;
        text = 'Disgusted';
        break;
      case 'surprised':
        icon = <FontAwesomeIcon icon={faSurprise} style={{ color: 'orange' }} />;
        text = 'Surprised';
        break;
      default:
        icon = null;
        text = '';
        break;
    }

    return { icon, text };
  };

  const handleImage = async () => {
    try {
      const detections = await faceApi.detectAllFaces(imgRef.current, new faceApi.TinyFaceDetectorOptions())
        .withAgeAndGender()
        .withFaceExpressions();

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.innerHTML = faceApi.createCanvasFromMedia(imgRef.current);
      faceApi.matchDimensions(canvas, { width: 300, height: 300 });

      if (detections && detections.length > 0) {
        const resized = faceApi.resizeResults(detections, { width: 300, height: 300 });
        resized.forEach(({ detection, age, gender, expressions }) => {
          const { _box } = detection;
          ctx.beginPath();
          //it will draw box..
          ctx.rect(_box._x, _box._y, _box._width, _box._height);
          //box color..
          ctx.strokeStyle = 'blue';
          ctx.lineWidth = 2;
          //This line draws the stroke (outline) of the rectangle on the canvas.
          ctx.stroke();
          const x = _box._x;
          const y = _box._y + _box._height + 20;
          ctx.fillStyle = 'white';
          ctx.font = '16px Arial';
          ctx.fillText(`Age: ${Math.round(age)}`, x, y);
          ctx.fillText(`Gender: ${gender}`, x, y + 20);
        });
        setExpressions(resized[0].expressions);
        setIsDetecting(false);
      } else {
        setExpressions([]);
        setIsDetecting(false);
      }
    } catch (error) {
      console.error("Error handling image:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceApi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceApi.nets.ageGenderNet.loadFromUri('/models'),
          faceApi.nets.faceExpressionNet.loadFromUri('/models'),
        ]);
        handleImage();
      } catch (error) {
        console.error("Error loading models:", error);
        setIsLoading(false);
      }
    };

    imgRef.current && loadModels();
  }, []);

  const goBack = () => {
    window.location.reload();
  };

  return (
    <div className='bg'>
      <div className='container'>
        <div className='left'>
          <img ref={imgRef} crossOrigin="anonymous" src={url} alt="" className="image" width={300} height={300} />
          <canvas ref={canvasRef} width={300} height={300} className="canvas" />
        </div>
        <div className='right'>
          {isLoading ? (
            <h3>Detecting expressions...</h3>
          ) : (
            <h3>{isDetecting ? 'Detecting expressions...' : 'Expressions detected'}</h3>
          )}
          {!isDetecting && (
            <ul>
              {Object.entries(expressions).map(([expression, probability]) => (
                <li key={expression}>
                  <span className="expression-icon">
                    {getExpressionIcon(expression).icon}
                  </span>
                  <span className="expression-text" style={{ fontWeight: 'bold', color: 'blue' }}>
                    {`${getExpressionIcon(expression).text} - ${Math.round(probability * 100)}%`}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <button onClick={goBack}>Go back</button>
        </div>
      </div>
    </div>
  );
} 

export default ImgPost;















 




 

