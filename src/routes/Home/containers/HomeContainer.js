import { connect } from 'react-redux';

import Home from '../components/HomeView';

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const mapStateToProps = (state) => ({
  state
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
