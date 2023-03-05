import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button onClick={dec} id="dec" className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={inc} id="inc" className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, actions)(Counter);
