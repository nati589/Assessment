import { useState } from "react";
import ListingHeader from "../components/ListingHeader"
import { useEffect } from "react";
import axios from "axios";

function ListingPage() {
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any ongoing requests
    return () => {
      // Cleanup logic here, if needed
    };
  }, []); // Empty dependency array means this effect will run only once, similar to componentDidMount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
        <ListingHeader />
        <h1>{data}</h1>
    </div>
  )
}

export default ListingPage