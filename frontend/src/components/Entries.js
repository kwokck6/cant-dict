function Entries({entries, deleteEntry}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>詞條</th>
                    <th>粵拼發音</th>
                    <th>詞性</th>
                    <th>釋義</th>
                </tr>
            </thead>
            <tbody>
            {entries?.map((entry) => (
                <tr key={entry['_id']['$oid']}>
                    <td><a className="text-decoration-none" href={`/words/${entry['_id']['$oid']}`}>{entry['entry']}</a></td>
                    <td>{entry['jyutping']}</td>
                    <td>{entry['pos']}</td>
                    <td>{entry['meaning']}</td>
                    <td><button type="button" className="btn-close" onClick={deleteEntry}></button></td>
                </tr>
                )
            )}
            </tbody>
        </table>
    )
}

export default Entries;