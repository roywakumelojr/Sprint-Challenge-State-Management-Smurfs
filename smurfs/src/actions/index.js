import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const SMURF_ADDED = "SMURF_ADDED";
export const SMURF_ADDING = "SMURF_ADDING";

export const fetchSmurfs = () => dispatch => {
    dispatch ({
        type: FETCH_SMURF_START
    })
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
        console.log('smurf data loaded successfully',res)
        dispatch({ 
            type: FETCH_SMURF_SUCCESS, 
            payload: res.data 
        });
    })
    .catch( error => {
        console.log('smurf data did not load',error)
        dispatch({ 
            type: FETCH_SMURF_FAILURE, 
            payload: error 
        });
    })
};

export const addSmurf = smurf => dispatch => {
    document.location.reload();
  
    dispatch({ type: SMURF_ADDING });
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
        console.log('Smurf successfully added to data')
        dispatch({ 
            type: SMURF_ADDED, 
            payload: response.data 
        });
    })
    .catch(error => {
        console.log('There was an error adding smurf to data',error)
        dispatch({ 
            type: FETCH_SMURF_FAILURE, 
            payload: error 
        });
    })
};