import React from "react";

import { rssFeedProviders, ProvidersLinkMap } from "../core/consts";

export const RSSProviders = ({ selectedProvider, handleClick }) => (
  <ul className="list-inline">
    {rssFeedProviders.map((provider, idx) => (
      <li className="list-inline-item" key={idx}>
        <a
          href={ProvidersLinkMap[provider]}
          onClick={e => handleClick(e, provider)}
          className={`btn btn-outline-primary ${
            selectedProvider === provider ? "active" : ""
          }`}
        >
          {provider}
        </a>
      </li>
    ))}
  </ul>
);
