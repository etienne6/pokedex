import React from "react";

/**
 *
 * @param {Object} props
 * @param {String} props.image - String url to image from the api
 * @param {Array} props.types - Pokemon types
 * @param {String} props.name - Pokemon name
 */

const PokeCard = props => {
  return (
    <div className="pokemon">
      <img src={props.image}></img>
      <div className="name">{props.name}</div>
      <div className="pokemon-types">
        {props.types.map(type => (
          <div className={`${type} type`}>{type}</div>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
