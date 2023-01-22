import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
    chooseQ1,
    chooseQ2,
    chooseQ3,
    chooseQ4,
    chooseQ5,
    chooseQ6,
    chooseQ7,
    chooseQ8 } from '../redux-components/rootSlice';

export const FormResultPage = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const cleanUpStore = () => {
        dispatch(chooseQ1(""));
        dispatch(chooseQ2(""));
        dispatch(chooseQ3(""));
        dispatch(chooseQ4(""));
        dispatch(chooseQ5("oslo"));
        dispatch(chooseQ6("japan"));
        dispatch(chooseQ7(""));
        dispatch(chooseQ8(""));
    }

    return (
        <>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <a href="#/" onClick={cleanUpStore}>Start Over</a> 
        </>
    ) // Could reset the values in the store back to the defaults at this point
}