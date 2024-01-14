import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
function Teams(props){

    const [teamDisplay, setTeamDisplay] = useState(true);

    const toggleTeams = () => {
        setTeamDisplay(!teamDisplay);
    }


    return (
        <div className={`teamsWrapper mb-4 ${(teamDisplay? '': 'closed')}`}>
            <div className='container'>
                <div className='alert alert-warning'>
                    <div className='d-flex teamsTitle justify-content-space-between'>
                    <h3 className='col-xs-8'>Teams</h3>
                    <a href="#" className='text-end col-xs-4' onClick={()=>toggleTeams()}>
                        {(!teamDisplay?
                        <FontAwesomeIcon icon={faChevronDown} />
                        :<FontAwesomeIcon icon={faChevronUp} />
                        )}
                    </a>
                    </div>
                <div className="row teamsInner">
                    <div className="col-sm-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Team 1</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={props.team1Name} onChange={(e)=> props.setTeamName(1, e.target.value)} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Team 2</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={props.team2Name} onChange={(e)=> props.setTeamName(2, e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Teams;