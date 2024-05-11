// import React from "react";
import { Routes, Route } from "react-router-dom";

import ListingPage from "./pages/ListingPage";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListingPage />} />
      <Route path="/books/create" element={<AddBook />} />

      <Route path="/books/edit/:id" element={<UpdateBook />} />

      {/* <Route path="/books/delete/:id" element={<DeleteBook />} /> */}
    </Routes>
  );
};

export default App;
