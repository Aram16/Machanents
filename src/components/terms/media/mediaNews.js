import React from 'react';
import girl from '../../../assets/logo/girl.png'
import './index.css';


const MediaNews = ({ laboratorymedia, laboratoryenginner, laboratoryprogram, laboratorychess, name, teachers, description }) => {
    return (
        <div>
             <div  className="enginner-div">
                    <div>
                        <h3 className="chess-h3">
                            {name}
                        </h3>
                        <p className="chess-p">
                            {laboratorymedia}
                            {laboratorychess}
                            {laboratoryenginner}
                            {laboratoryprogram}
                        </p>
                        <h4 className="h4">CONDITIONS:</h4>
                        <div className="eng">
                            <div>
                                <p><b>Age:</b> 16</p>
                            </div>
                            <div>
                                <p><b>Grafic:</b> 2 days in week</p>
                            </div>
                            <div>
                                <p><b>Knowlage:</b> beginner</p>
                            </div>
                            <div>
                                <p><b>Tevoghutyun:</b> 10 mounth</p>
                            </div>
                            <div>
                                <p><b>Price:</b> Free</p>
                            </div>
                        </div>
                        <h4 className="chess-h4">TEACHERS</h4>
                        <div className="teachers-div">
                            <div className="image">
                                <img src={girl}  />
                            </div>
                            <div className="lorem">
                                <p className="p"><b>{teachers[0]}</b><br />{description[0]}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.</p>
                            </div>
                        </div>
                         <div className="teachers-div">
                             <div className="image">
                                 <img src={girl}  />
                             </div>
                             <div className="lorem">
                                 <p className="p"><b>{teachers[1]}</b><br />{description[1]}</p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.</p>
                             </div>
                         </div>
                     </div>
             </div> 
        </div>
    );
};

export default MediaNews;