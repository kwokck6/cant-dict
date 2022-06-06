import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Entry(props) {
    const [data, setData] = useState({});
    const {_id} = useParams();
    useEffect(() => {
        fetch(`/words/${_id}`)
            .then((response) => response.json())
            .then((entry) => setData(entry));
    }, [_id])

    return (
        <div className="pt-3">
            <h1>{data['entry']}</h1>
            {data['category']?.map((category) =>
                <span className="badge rounded-pill bg-secondary me-1">{category}</span>)}
            {(typeof data === {}) ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>發音</th>
                            <td>{data['jyutping']}</td>
                        </tr>
                        <tr>
                            <th>詞性</th>
                            <td>{data['pos']}</td>
                        </tr>
                        <tr>
                            <th>釋義</th>
                            <td>{data['meaning']}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Entry;
