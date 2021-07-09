import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };
  
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;

// import React, { useState, useEffect } from 'react'
// import { FaSearch } from 'react-icons/fa'
// import Photo from './Photo';

//  const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
// const mainUrl = `https://api.unsplash.com/photos/`
// const searchUrl = `https://api.unsplash.com/search/photos/`

// //Access Key - 2qksHiF7cCqMW0Fg6QLDgDJxvluY3dA_4YgpRBziTFE
// //Secret Key - ArWmvaZ1puZpvjh1zH0_yJ0PW278qpCRmTCuxGGfW9s
// //url - https://api.unsplash.com/
// // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

// function App() {

//    const [loading, setLoading] = useState(false);
//    const [photos, setPhotos] = useState([]);
//    const [page, setPage] = useState(1);
//    const [query, setQuery] = useState('');

//   const fetchImages = async() => {
//    setLoading(true);
//     let url;
//     const urlPage = `&page=${page}`;
//     const urlQuery = `&query=${query}`;

//     if(query){
//       url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
//     }
//     else{
//      url = `${mainUrl}${clientID}${urlPage}`;
//     }

//     try {
//       const response = await fetch(url);
//       const images = await response.json();
//       console.log(images);
//        setPhotos((oldPhotos) => {
//          //getting images with scrolling
//          //   return [
//          //     ...oldPhotos,
//          //     ...images
//          //   ]
//          // });
//          if(query && page === 1) {
//            return images.results
//          }
//          else if (query) {
//            return [
//              ...oldPhotos,
//             ...images.results];
//          }
//          else{
//            return [
//              ...oldPhotos,
//              images
//            ]
//          }
//        });

//       setLoading(false);
//       console.log(images);

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleSubmit = (e) => {
//    e.preventDefault();
//    //console.log("hellooo");
//    fetchImages();
//   }

//   useEffect(() => {
//     fetchImages();
//   }, [page]);

//   useEffect(() => {
//    const event = window.addEventListener('scroll', () => {
//      // settings for infinite scrolling
//      //console.log(`innerHeight ${window.innerHeight}`);
//     // console.log(`scrollY ${window.scrollY}`);
//     // console.log(`body height ${document.body.scrollHeight}`);
//     if((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2){
//       console.log("it works");
//       setPage((oldPage) => {
//         return oldPage + 1;
//       })
//     }
//    })
//      return () => window.addEventListener('scroll', event);
//   },[])

//   return (
//     <main>
//       <section className="search">
//         <form className="search-form">
//           <input type="text"
//           placeholder="Search Here"
//           className="form-input"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}/>
//           <button type="submit" className="submit-btn" onClick={handleSubmit}>
//             <FaSearch />
//           </button>
//         </form>
//       </section>
//       <section className="photos">
//         <div className="photos-center">
//           {photos.map((image, index) => {
//             //console.log(image);
//            return(
//              <Photo key={image.id}
//              {
//                ...image
//              }
//              />
//            );
//           })}
//         </div>
//         {
//           loading && <h2 className="loading">Loading...</h2>
//         }
//       </section>
//     </main>
//   );
// }

// export default App
