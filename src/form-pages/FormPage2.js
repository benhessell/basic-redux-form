import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseQ3, chooseQ4 } from '../redux-components/rootSlice';

export const FormPage2 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const q3InitialValue = useSelector( (state) => state.root.q3);
    const q4InitialValue = useSelector( (state) => state.root.q4);
    const { register, handleSubmit} = useForm({
        defaultValues: { 
            q3: q3InitialValue,
            q4: q4InitialValue
         }});

    const nextStep = (data) => {
        dispatch(chooseQ3(data.q3));
        dispatch(chooseQ4(data.q4));
        history.push('./formpage3');
    }

    const prevStep = (data) => {
        dispatch(chooseQ3(data.q3));
        dispatch(chooseQ4(data.q4));
        history.push('./formpage1');
    }

    return (
        <form onSubmit={nextStep}>
            <div className="inputfield_container">
                <label htmlFor="q3">Question 1: What is the colour of the black box in a plane?</label>
                <input className="inputfield" id="q3" name="q3" {...register('q3')} />
            </div>
            <div className="inputfield_container">
                <label htmlFor="q4">Question 2: What type of dog is Scooby Doo?</label>
                <input className="inputfield" id="q4" name="q4" {...register('q4')} />
            </div>
            <div className="form-buttons">
            <button className="btn prev-btn" type="button" onClick={handleSubmit(prevStep)}>Previous</button>
                <button className="btn next-btn" type="submit" onClick={handleSubmit(nextStep)}>Next</button> 
            </div>
        </form>
    )
}