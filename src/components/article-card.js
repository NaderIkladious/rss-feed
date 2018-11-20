import React from "react";

import { ResponsiveImage } from "../components";
import "../styles/components/article-card.css";

export const ArticleCard = ({ data }) => (
  <div className="article-card position-relative">
    {console.log(data)}
    <ResponsiveImage
      image={data.thumbnail || data.enclosure.link}
      height="310px"
    />
    <div className="article-text text-white position-absolute w-100 pl-3 pr-2">
      <div className="text-truncate text-nowrap">
        <a className="article-title ">{data.title}</a>
      </div>
      <p className="article-date text-gray font-small">{data.pubDate}</p>
    </div>
  </div>
);
