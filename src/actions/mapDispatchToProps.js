import { bindActionCreators } from 'redux'

import axios from 'axios'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    postLineups: (lineup) => ({
      type: 'POST_LINEUPS',
      /*
       *
       * if we attatch a promise to the payload it allows redux-promise
       * 
       */
      payload: axios.post('/lineups', {
        lineups: []
      }),
    }),

    getLineups: () => ({
      type: 'GET_LINEUPS',
      payload: 'normally it is just a normal payload'
    }),
     
    
  }, dispatch)
); 

export default mapDispatchToProps