import React from "react";

import { ResponsiveImage } from "../components";
import "../styles/components/article-card.css";

export const ArticleCard = ({ data }) => (
  <div className="article-card position-relative">
    <div className="card-thumbnail">
      <ResponsiveImage
        image={data.thumbnail || data.enclosure.link}
        height="310px"
      />
      <div className="article-text text-white position-absolute w-100 pl-3 pr-2">
        <div className="text-truncate text-nowrap">
          <p className="article-title mb-1 pt-2">{data.title}</p>
        </div>
        <p className="article-date text-gray font-small">{data.pubDate}</p>
      </div>
    </div>
    <div className="card-details">
      <h2 className="h4">{data.title}</h2>
      <p className="article-date text-gray small">{data.pubDate}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      />
      <div className="text-right">
        <a
          href={data.link}
          className="btn btn-secondary mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);
