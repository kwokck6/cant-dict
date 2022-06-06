function Accordion(props) {
    return (
            <div className="accordion-item">
                <h2 className="accordion-header" id={props.headingId}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.bodyId}`} aria-expanded="false" aria-controls={props.bodyId}>
                        <strong>{props.title}</strong>
                    </button>
                </h2>
                <div id={props.bodyId} className="accordion-collapse collapse" aria-labelledby={props.headingId} data-bs-parent={`#${props.parentId}`}>
                    <div className="accordion-body">
                        {props.children}
                    </div>
                </div>
            </div>
    )
}

export default Accordion;
