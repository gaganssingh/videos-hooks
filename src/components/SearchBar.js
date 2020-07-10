import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
   const [term, setTerm] = useState("");

   const onSubmit = (event) => {
      event.preventDefault();

      onFormSubmit(term);
   };

   return (
      <div className="search-bar ui segment">
         <form action="" className="ui form" onSubmit={onSubmit}>
            <div className="field">
               <label htmlFor="">Search For A Video</label>
               <input
                  type="text"
                  value={term}
                  onChange={(event) => setTerm(event.currentTarget.value)}
               />
            </div>
         </form>
      </div>
   );
};

export default SearchBar;
