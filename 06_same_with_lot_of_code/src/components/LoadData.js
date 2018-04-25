import React from 'react';
import {connect} from 'react-redux';
import {fetchDrivers, fetchStages, fetchCars} from "../actions/fetch";
import {deleteDrivers, deleteStages, deleteCars} from "../actions/delete";

const LoadData = ({dispatch, state}) => {
    const handleOnClick = (fetch) => () => {
        dispatch(fetch());
    };
    const handleDelete = (type, i) => () => {
        switch (type) {
            case 'drivers':
                dispatch(deleteDrivers(i));
                break;
            case 'cars':
                dispatch(deleteCars(i));
                break;
            case 'stages':
                dispatch(deleteStages(i));
                break;
        }
    };
    const displayContent = (stateSlice) => {
        if (state[stateSlice].loading) return <div>loading</div>;
        if (state[stateSlice].error) return <div className="error">{state[stateSlice].error.message}</div>;
        return state[stateSlice].data.map((c, i) => <div key={i}>{c}<button onClick={handleDelete(stateSlice, i)}>x</button></div>)
    };

    return (
        <div className="loaded-data-container">
            <div className="loaded-data">
                {displayContent('cars')}
                <button onClick={handleOnClick(fetchCars)}>
                    Load Cars
                </button>
            </div>
            <div className="loaded-data">
                {displayContent('drivers')}
                <button onClick={handleOnClick(fetchDrivers)}>
                    Load Drivers
                </button>
            </div>
            <div className="loaded-data">
                {displayContent('stages')}
                <button onClick={handleOnClick(fetchStages)}>
                    Load Stages
                </button>
            </div>
        </div>
    );
};

export default connect((state) => ({state}))(LoadData);
