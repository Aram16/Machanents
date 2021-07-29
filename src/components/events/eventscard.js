import time from '../../assets/logo/Time.png'
import activity from '../../assets/logo/Activity.png'
import { useTranslation } from "react-i18next";
import Image from './image'

const NewsEvents = ({eventsText}) => {
    return (
        <div  className="eventTitle-div">
            <div  className="Title-div">
                <div className="event-root">
                    <h3>NEWS OR EVENT TITLE</h3>
                    <div className="icon">
                        <p><img src={activity}  /> NEWS</p>
                        <p><img src={time} className="clock"/>  114.54.2</p>
                        <p>
                            {eventsText}
                        </p>
                        <Image />

                    </div>                    
                </div>
            </div>
            <div>
            </div>
        </div>
    );
  };
  
  export default NewsEvents;