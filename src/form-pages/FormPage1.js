import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseQ1, chooseQ2 } from '../redux-components/rootSlice';

export const FormPage1 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const q1InitialValue = useSelector( (state) => state.root.q1);
    const q2InitialValue = useSelector( (state) => state.root.q2);
    const { register, handleSubmit} = useForm({
        defaultValues: { 
            q1: q1InitialValue,
            q2: q2InitialValue
         }});

    const nextStep = (data) => {
        dispatch(chooseQ1(data.q1));
        dispatch(chooseQ2(data.q2));
        history.push('./formpage2');
    }

    return (
        <form onSubmit={nextStep}>
            <div className="inputfield_container">
                <label htmlFor="q1">Question 1: What is the name of Batman's sidekick?</label>
                <input className="inputfield" id="q1" name="q1" {...register('q1')} />
            </div>
            <div className="inputfield_container">
                <label htmlFor="q2">Question 2: What are the colour of thorns that Donkey collects in Shrek?</label>
                <input className="inputfield" id="q2" name="q2" {...register('q2')} />
            </div>
            <div className="form-buttons">
                <button type="submit" className="btn next-btn" onClick={handleSubmit(nextStep)}>Next</button> 
            </div>
        </form>
    )
}