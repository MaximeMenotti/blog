import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CITIES_QUERY from "../../queries/city/cities";

const Nav = () => {
  return (
    <div>
      <Query query={CITIES_QUERY} id={null}>
        {({ data: { villes } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Strapi Blog</Link>
                    </li>
                    {villes.map((ville, i) => {
                      return (
                        <li key={ville.id}>
                          <Link
                            to={`/city/${ville.id}`}
                            className="uk-link-reset"
                          >
                            {ville.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
