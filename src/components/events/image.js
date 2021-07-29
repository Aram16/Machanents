import rectangle5 from '../../assets/logo/rectangle-5.png'
import rectangle12 from '../../assets/logo/rectangle-12.png'
import rectangle16 from '../../assets/logo/rectangle-16.png'
import rectangle13 from '../../assets/logo/rectangle-13.png'
import rectangle14 from '../../assets/logo/rectangle-14.png'
import rectangle15 from '../../assets/logo/rectangle-15.png'
import rectangle20 from '../../assets/logo/rectangle-20.png'
import rectangle19 from '../../assets/logo/rectangle-19.png'
import rectangle18 from '../../assets/logo/rectangle-18.png'
import rectangle17 from '../../assets/logo/rectangle-17.png'

const Image = () => {
    return (
        <div>
            <div className="image">
                <div className="displayy-grid">
                    <div>
                        <img src={rectangle5} alt="rectangle5"/>
                    </div>
                    <div>
                        <img src={rectangle12} alt="rectangle12"/>
                    </div>
                    <div>
                        <img src={rectangle13} alt="rectangle13"/>
                    </div>
                    <div>
                        <img src={rectangle14} alt="rectangle14"/>
                    </div>
                    <div>
                        <img src={rectangle15} alt="rectangle15"/>
                    </div>
                </div>
                <div className="displayy-grid">
                    <div>
                        <img src={rectangle20} alt="rectangle20"/>
                    </div>
                    <div>
                        <img src={rectangle19} alt="rectangle19"/>
                    </div>
                    <div>
                        <img src={rectangle18} alt="rectangle18"/>
                    </div>
                    <div>
                        <img src={rectangle17} alt="rectangle17"/>
                    </div>
                    <div>
                      <img src={rectangle16} className="mardd" alt="rectangle16"/>
                    </div>
                      
                </div>
            </div>  
        </div>
    );
  };
  
  export default Image;
 