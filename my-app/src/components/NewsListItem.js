import React from 'react';

function NewsListItem({name, description, categories, onDelete}) {

    let elementClassName;

    switch(categories){
        case "Hot News" :
            elementClassName = "bg-danger bg-gradient"
            break
        case "Sport News" :
            elementClassName = "bg-primary bg-gradient"
            break
        case "World News" :
            elementClassName = "bg-success bg-gradient"
            break
        default :
            elementClassName = "bg-info bg-gradient"
            break
    }


    

    return (
        <li className={`card flex-row shadow-lg text-white ${elementClassName} my-2`}>
            
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <img className="img-fluid w-25 d-inline" src="https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409" alt="News img" 
            style={{"objectFit": "cover"}}
            />
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button onClick={onDelete} type="button" className="btn-close" aria-label>
                </button>
            </span>
        </li>
    );
}

export default NewsListItem;