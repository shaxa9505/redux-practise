import React, {useState} from 'react';
import UseHttp from '../Hook/UseHttp';
import {v4} from "uuid"
import {newsCreated} from "./Redux/actions";
import {useDispatch, useSelector} from "react-redux";

function NewsAddForm(props) {

    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("");
    const {request} = UseHttp();
    const dispatch = useDispatch()

    function OnSubmitHandle (e) {
        e.preventDefault();
        const newNews = {id: v4(), name, description, categories};
        request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
        .then(res => dispatch(newsCreated(newNews)))

        setName("");
        setDescription("");
        setCategories("");
    }

    return (
        <form classNames="border p-4 shadow-lg rounded" onSubmit={OnSubmitHandle}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Name for new News</label>
                <input 
                    type="text" 
                    required name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="What is name of news?" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Description</label>
                <textarea 
                    type="text" 
                    required 
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="What is your news about?" 
                    style={{height: "120px"}} 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Choose category of news</label>
                <select 
                    required 
                    className="form-select" 
                    id="category" 
                    name="category" 
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                >
                    <option>News about...</option>
                    <option value="Hot News">Hot news</option>
                    <option value="Sport News">Sport news</option>
                    <option value="World News">World news</option>
                </select>
            </div>
            <button type="submit" className="btn btn-dark shadow-lg text-light w-100">Create News</button>
        </form>
    );
}

export default NewsAddForm;