import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { changeFilter } from "../actions/action";

const mapStateToProps = state => ({
  buttonActive: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filterType => dispatch(changeFilter(filterType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
