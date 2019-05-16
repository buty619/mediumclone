import React from 'react';
// import SignIn from "./signIn";
// import GetStarted from "./getStarted";
import { Link } from 'react-router-dom';
import "../styles/bannerList.css";

const BannerList = ({data}) => {
  
  let content = (
    <article className="post-embed">
      <Link className="post-embed__container" to={`/storie/`+data._id}>
        <div className="post-embed__body">
        <h1 className="post-embed__title" itemprop="headline">
          {data.title}
        </h1>
        <p className="post-embed__excerpt" itemprop="description">
          {data.firstP}
        </p>
        <span className="post-embed__source">
          {data._id}
        </span>
      </div>
      <div className="post-embed__thumbnail">
        <img src={data.img}></img>
      </div>
      </Link>
    </article>
  );
  return content
}
export default BannerList;