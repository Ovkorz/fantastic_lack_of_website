<template>
<div class="searchbox">
      <img
        class="icon"
        alt=""
        src="@/assets/logo.svg"
        width="20"
        height="20"
      >

      <input
       
        class="search_input"
        placeholder="search"
      >
    </div>
</template>

<style>
.search_input { 
  grid-area: search_input; 
  background-color: inherit;
  color: white;
  border: none;
  font-size: 18px;
  padding: 5px;
}

.searchbox {
  display: grid; 
  grid-template-columns: 0.4fr 1.6fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "icon search_input"; 
  
  height: 40px;
  min-width: 150px;
  width: fit-content;

  float:right;
  right: 30px;
  margin-top: 24px;

  padding: 7px;
  font-size: 15px;
  border: black 4px solid;

  flex-grow: 1;
}
</style>