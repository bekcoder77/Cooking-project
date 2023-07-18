import React, { useState } from 'react'

function Create() {
  const [title, setTitle] = useState("");

const handleSubmit = ()=>{
  e.preventDefault();
}

  return (
    <div className='create'>
      <div className="create_box">
        <h1>Create</h1>
        <form onSubmit={handleSubmit} >
          <p>Title :</p>
          <input  
          
          required
          
          onChange={(e) => {
              setTitle(e.target.value);
            }}
           type="text" />
          <p>Ingredients :</p>
          <label className='input_btn' htmlFor="#">
            <input type="text" />
            <button type='submit'>ADD</button>
          </label>
          <h3>Ingredient:</h3>
          <p>Methos :</p>
          <input type="text" />
          <p>CookingTime:</p>
          <input type="text" />
          <button type='submit'>Submit</button>

        </form>
      </div>

    </div>
  )
}

export default Create