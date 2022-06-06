import Entries from "../components/Entries";
import {useEffect, useState} from "react";

function Home(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/words")
            .then((response) => response.json())
            .then((entries) => setData(entries))
    }, [])

    const deleteWord = (entry) => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": ['http://localhost:5000/'],

            }
        }
        fetch('http://localhost:5000/delete-word', requestOptions)
            .then((response) => {
                if (response.ok) {
                    const idx = data.indexOf(entry);
                    data.splice(idx, 1);
                    setData(data);
                }
            })
    }

    return (
        <div className="pt-3">
            <h1 className="text-center">辭典</h1>
            {/* TODO: Add Search Bar*/}
            <Entries entries={data} deleteEntry={deleteWord}/>
        </div>
    )
}

export default Home;
