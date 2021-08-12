import React, { useEffect } from "react";
import { getPokemon } from "../actions";
import { connect } from "react-redux";
// import axios from 'axios'

const Pokemon = (props) => {
  const { name, isFetching, error } = props;

  useEffect(() => {
    props.getPokemon();
  }, []);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Woo loo loo!</h2>;
  }

  const handleClick = (name) => {
    console.log("clicking");
    props.getPokemon(name);
  };

  return (
    <>
      <div>
        <h2>Get a Pokemon</h2>
      </div>
      <button onClick={handleClick}>Get New Pokemon</button>
      <h2>Welcome to the team {name}</h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPokemon })(Pokemon);
