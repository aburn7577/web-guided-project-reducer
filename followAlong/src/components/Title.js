import React, { useState, useReducer } from 'react';
import reducer, { initialState} from './../reducers';

const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');
  const [state, dispatch ] = useReducer(reducer, initialState);

  const handleChanges = e => {
    // setNewTitleText(e.target.value);
  };

  const handleEditing = ()=> {
    // setEditing(!editing)
    dispatch();
  }

  const handleFormInput = ()=> {
    // setTitle(newTitleText);
    // setEditing(false);
  }

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormInput}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;