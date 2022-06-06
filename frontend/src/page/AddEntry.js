import AddSubentry from '../components/AddSubentry';
import {useState, useEffect} from "react";

function AddEntry(props) {
    const [subentryList, setSubentryList] = useState([<AddSubentry key={1} count={1} />]);

    return (
        <div className="bg-light p-3 rounded">
            <h1 className="text-center">新增辭彙</h1>
            <form method="post">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="entry" name="entry" required placeholder="詞條" />
                    <label htmlFor="entry">詞條</label>
                </div>
                {(subentryList.length < 1) && (
                    <div className="alert alert-danger">
                        <p></p>
                    </div>
                )}
                {subentryList}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">加入辭典</button>
                </div>
            </form>
        </div>
    );
}

export default AddEntry;
