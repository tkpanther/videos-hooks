import React, {useState} from 'react';

const SearchBar = ({onSubmit}) => {
    const[term,setTerm] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        return onSubmit(term);
    }

    const updateSearchTerm = event => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={updateSearchTerm}/>
                </form>
        </div>
    );

};

export default SearchBar;