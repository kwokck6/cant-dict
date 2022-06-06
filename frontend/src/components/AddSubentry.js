function AddSubentry(props) {
    const handleChange = (e) => {
        return e.target.value;
    }

    return (
        <fieldset className="mb-3">
            <legend>分條{props.count}</legend>
            <div className="row">
                <div className="form-floating mb-3 col-4">
                    <input type="text" className="form-control" id="jyutping" name="jyutping" onChange={handleChange} required placeholder="粵拼拼音" />
                    <label htmlFor="jyutping">粵拼拼音</label>
                </div>

                <div className="form-floating mb-3 col-4">
                    <select multiple className="form-select" id="pos" name="pos" required>
                        <optgroup label="名詞">
                            <option value="NOUN">名詞</option>
                            <option value="PROPN">專有名詞</option>
                            <option value="PRON">代詞</option>
                        </optgroup>
                        <optgroup label="動詞">
                            <option value="VERB">動詞</option>
                            <option value="AUX">助動詞</option>
                        </optgroup>
                        <optgroup label="描述">
                            <option value="ADJ">形容詞</option>
                            <option value="ADV">副詞</option>
                            <option value="ADP">介詞</option>
                            <option value="DET">限定詞</option>
                        </optgroup>
                        <optgroup label="連接詞">
                            <option value="CCONJ">對等連接詞</option>
                            <option value="SCONJ">從屬連接詞</option>
                        </optgroup>
                        <optgroup label="定語">
                            <option value="PART">助詞</option>
                            <option value="INTJ">感嘆詞</option>
                        </optgroup>
                        <optgroup label="雜項">
                            <option value="NUM">數詞</option>
                            <option value="SYM">符號</option>
                            <option value="PUNCT">標點符號</option>
                            <option value="X">詞性不詳</option>
                        </optgroup>
                    </select>
                    <label htmlFor="pos">詞性</label>
                    <small className="form-text text-mute" id="pos-help">撳住<kbd>CTRL</kbd>掣去逐個揀。</small>
                </div>
                <div className="form-floating mb-3 col-3">
                    <textarea className="form-control" id="meaning" name="meaning" placeholder="釋義" onChange={handleChange}></textarea>
                    <label htmlFor="meaning">釋義</label>
                    <small className="form-text text-muted" id="meaning-help">用半形逗號 (,) 分開唔同意思。</small>
                </div>
                <div className="col-1">
                    <svg type="button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#198754"
                             className="bi bi-plus" viewBox="0 0 12 12" onClick="">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <svg type="button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc3545"
                             className="bi bi-dash" viewBox="0 0 12 12" onClick="">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </div>
            </div>
        </fieldset>
    );
}

export default AddSubentry;
