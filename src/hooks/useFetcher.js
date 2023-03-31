import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";


const useFetcher = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [state, setState] = useState([]);
  const [filteredState, setFilteredState] = useState([...state]);
  const [allianceKeyword, setAllianceKeyword] = useState("")
  
  const filterHandler = (e) => {
    let value = e.target.value;
    let checked = e.target.checked
    if (checked){
      setAllianceKeyword(value)
    } else {
      setAllianceKeyword("")
    }
  };

  useEffect(() => {
    if (allianceKeyword) {
      setFilteredState(state.filter((item) => item.alliance === allianceKeyword))
    } else {
      setFilteredState([...state])
    }
  },[allianceKeyword])

  useEffect(() => {
    const apiURL = "https://kayak.com/h/mobileapis/directory/airlines/homework";
    const fetcherFunc = async () => {
      try {
        setLoading(true)
        const response = await fetchJsonp(apiURL, {
          jsonpCallback: "jsonp",
        });
        const data = await response.json();
        setState(data);
        setFilteredState(data)
        setLoading(false)
      } catch (err) {
        setError(err.message || "Something went wrong")
        setLoading(false)
      }
    };
    fetcherFunc();
  }, []);

  return {
    data: filteredState,
    loading,
    error,
    filterHandler
  }
}

export default useFetcher;