import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  selectedPage: 1,
  allCategories: [],
};

export const postsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
  },
});

export const { setSearchText, setSelectedPage, setAllCategories } =
  postsSlice.actions;
export default postsSlice.reducer;
