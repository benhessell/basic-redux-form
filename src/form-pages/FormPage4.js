import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseQ7, chooseQ8 } from '../redux-components/rootSlice';

export const FormPage4 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const q7InitialValue = useSelector( (state) => state.root.q7);
    const q8InitialValue = useSelector( (state) => state.root.q8);
    const { register, handleSubmit} = useForm({
        defaultValues: { 
            q7: q7InitialValue,
            q8: q8InitialValue
         }});

    const nextStep = (data) => {
        dispatch(chooseQ7(data.q7));
        dispatch(chooseQ8(data.q8));
        history.push('./formresultpage');
    }

    const prevStep = (data) => {
        dispatch(chooseQ7(data.q7));
        dispatch(chooseQ8(data.q8));
        history.push('./formpage3');
    }

    return (
        <form onSubmit={nextStep}>
            <div className="inputfield_container">
                <label htmlFor="q7">Question 1: Who is the highest scoring footballer of all time?</label>
                <input className="inputfield" id="q7" name="q7" {...register('q7')} />
            </div>
            <div className="inputfield_container">
                <label htmlFor="q8">Question 2: What colour is the sky?</label>
                <input className="inputfield" id="q8" name="q8" {...register('q8')} />
            </div>
            <div className="form-buttons">
            <button className="btn prev-btn" type="button" onClick={handleSubmit(prevStep)}>Previous</button>
                <button className="btn next-btn" type="submit" onClick={handleSubmit(nextStep)}>Next</button> 
            </div>
        </form>
    )
}