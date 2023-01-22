import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseQ5, chooseQ6 } from '../redux-components/rootSlice';

export const FormPage3 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const q5InitialValue = useSelector( (state) => state.root.q5);
    const q6InitialValue = useSelector( (state) => state.root.q6);
    const { register, handleSubmit} = useForm({
        defaultValues: { 
            q5: q5InitialValue,
            q6: q6InitialValue
         }});

    const nextStep = (data) => {
        dispatch(chooseQ5(data.q5));
        dispatch(chooseQ6(data.q6));
        history.push('./formpage4');
    }

    const prevStep = (data) => {
        dispatch(chooseQ5(data.q5));
        dispatch(chooseQ6(data.q6));
        history.push('./formpage2');
    }

    return (
        <form>
            <div className="inputfield_container">
                <label htmlFor="q5">What is the capital of Sweden?</label>
                <select id="q5" name="q5" {...register('q5')}>
                    <option value="oslo">Oslo</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="tomato">Tomato</option>
                </select>
            </div>
            <div className="inputfield_container">
                <label htmlFor="q6">What country has the biggest population?</label>
                <select id="q6" name="q6" {...register('q6')}>
                    <option value="japan">Japan</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="thailand">Thailand</option>
                </select>
            </div>
            <div className="form-buttons">
                <button className="btn prev-btn" type="button" onClick={handleSubmit(prevStep)}>Previous</button>
                <button className="btn next-btn" type="submit" onClick={handleSubmit(nextStep)}>Next</button> 
            </div>
        </form>
    )
}