import React, { Component } from "react";
import { connect } from "react-redux";

class Total extends Component {
  render() {
    const { total } = this.props;
    return <div>Total: {total}</div>;
  }
}

const mapStateToProps = state => ({
  total: state.products.total
});

export default connect(mapStateToProps)(Total);
