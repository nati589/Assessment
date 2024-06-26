import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const ListingPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const handleUpdate = (){

  //   }

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-ecv6.onrender.com/v1/book/getAll")
      .then((res) => {
        // Sort books by publish year before setting state
        // const sortedBooks = res.data.sort(
        //   (a, b) => a.PublishYear - b.PublishYear
        // );
        setBooks(res.data);
        setLoading(false);
        console.log("it is working");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <div key={book.id} className="border p-4">
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <p>{book.price}</p>
              <p>{book.PublishYear}</p>
              {/* <button onClick={handleUpdate()}>Update</button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingPage;
