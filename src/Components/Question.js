
function Question(props){
    const data = props.data;
    const index = props.index;
    

        return (
            <div className='card bg-light mb-4'>
                <div className="card-header">
                    <h3>{data.question}</h3>
                </div>
                <div className='card-body'>
                <p><strong>{data.answer}</strong></p>
                <p>{data.reference}</p>
                </div>
                <div className='card-footer'>Question (#{index+1}) </div>
            </div>
        )
    
}
export default Question;