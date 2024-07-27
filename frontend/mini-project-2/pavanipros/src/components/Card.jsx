import React from 'react';
import './card.css'; // CSS file for styling
import { useNavigate } from 'react-router-dom';
import student from '../assets/noto_woman-student.png';
const CreativeCard = (props) => {
    let navigatecon=useNavigate();
    function handleContinue() {
        navigatecon("/partially_scanned");
        }
    const { header, content ,year,time} = props;
    const getCardColor = (year) => {
        switch (year) {
            case 'puc1':
                return 'puc1-color';
            case 'puc2':
                return 'puc2-color';
            case 'btech1':
                return 'btech1-color';
            case 'btech2':
                return 'btech2-color';
            case 'btech3':
                return 'btech3-color';
            case 'btech4':
                return 'btech4-color';
            default:
                return 'default-color';
        }
    };
    return (
        <div className="main-color">
        <div className={`creative-card ${getCardColor(year)}`}>
            <div className="card-header">
                <h2 className="card-title">{header}<img src={student} className='student'/></h2>
            </div>
            <div className="card-body">
            <p className="card-text" style={{'color':'white'}}>
                    {content.split(',').map((item, index) => (
                        <React.Fragment key={index}>
                            {item.trim()}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
        
                
                <button type="button" onClick={handleContinue} className='continue'>Continue</button>
                <div className='card-time' style={{'color':'white'}}>
                {time}
            </div>
            </div>
        </div>
        </div>
    );
};

export default CreativeCard;
