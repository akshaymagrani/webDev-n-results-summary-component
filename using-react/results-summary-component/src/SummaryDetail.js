function SummaryDetail(props) {
    console.log(props);
    return (
        <div className="summary-detail my-lg-2 p-2 flex space-between border-rad p-3 my-3 bg-lightred">
            <span className="flex txt-lightred">
                <img src={props.icon} />
                {/* <svg className="pr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" />
                </svg> */}
                <span>{props.category}</span>
            </span>
            <span>
                <strong>{props.score}</strong> / 100
            </span>
        </div>
    )
}

export default SummaryDetail;