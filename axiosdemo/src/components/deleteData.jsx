
import axios from "axios";
import { useEffect, useState } from "react";

function DeleteData() {
  let [deleting, setDeleting] = useState(true); 
  let [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .delete("https://dummyjson.com/posts/1") 
        .then((v) => {
          console.log(v.data);
     setMessage(JSON.stringify(v.data));
          setDeleting(false);
        })
        .catch((e) => {
        console.log(e);
        
        });
    }, 3000);
  }, []);

  if (deleting) {
    return <h1>Deleting the data...</h1>;
  }

  return (
    <>
      <h1>data deleted successfully...</h1>
    </>
  );
}

export default DeleteData;