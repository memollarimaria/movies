import { useEffect, useState } from "react";
import {
  homeData,
  latest,
  recommended,
  series,
  trending,
  upcome,
} from "../../dummyData";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Upcoming from "../Upcoming/Upcoming";
import "./Style.css";

function SinglePage({ id }) {
  const [item, setItem] = useState(null);
  const [rec, setrec] = useState(recommended);

  useEffect(() => {
    const combinedData = [
      ...homeData,
      ...recommended,
      ...latest,
      ...upcome,
      ...trending,
      ...series,
    ];

    const foundItem = combinedData.find((item) => item.id === parseInt(id));

    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.title}</h1>
              <span> | {item.time} | </span>
              <span>HD</span>
            </div>
            <div className="container">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${item.embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="pageVideo"
              />
              <div className="para">
                <h3>Date: {item.released}</h3>
                <p>{item.plot}</p>
                <p>Starring : {item.actors}</p>
              </div>
              <div className="social">
                <h3>Share: </h3>
                <FaFacebookF className="share" size={30} />
                <FaTwitter className="share" size={30} />
                <FaLinkedinIn className="share" size={30} />
              </div>
            </div>
          </section>
          <Upcoming items={rec} title="Recommended Movies" />
        </>
      ) : null}
    </>
  );
}

export default SinglePage;
