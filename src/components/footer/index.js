import { FiPhone } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import {ImLocation} from "react-icons/im";
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import './index.css'



const Footer = () => {
    return (
      <div>
        <footer>
                <div className="footeeer">
                    <div className="contact-footer">
                        <h4>ՀԵՏԱԴԱՐՁ ԿԱՊ</h4>
                        <div>
                            <FiPhone className="zang" /> <p>094 94 92 64</p>  
                        </div>
                        <div>
                            <IoIosPaper className="zang" /> <p>info@ierc.am</p>  
                        </div>
                        <div>
                            <ImLocation className="zang" /> <p>ՇԱՀՈՒՄՅԱՆ 36</p> 
                        </div>
                        
                    </div>
                    <div className="footer-map">
                    <iframe 
                        className="element-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1366386406826!2d44.29580741538807!3d40.16151137939557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94d7cd99e2af%3A0xf547dc2a378df4d4!2sMachanents%20Tourism%20%26%20Art!5e0!3m2!1sru!2s!4v1623930544202!5m2!1sru!2s"
                    >
                    </iframe>
                    </div>
                </div>
                <div>
                    <hr color="#bf360c" className="hr"/>
                </div>
                <div className="social-icons">
                    <a href="https://www.instagram.com/machanentshouse/" target="_blank" className="instagram"><AiFillInstagram /></a>
                    <a href="https://www.facebook.com/machanentshouse" target="_blank" className="facebook"><FaFacebook /></a>
                    <a href="https://www.youtube.com/channel/UC5eSZp4GvUx4-WWol2eg4-w" target="_blank" className="youtube"><TiSocialYoutubeCircular /></a>
                </div>
            </footer>
      </div>
    );
  };
  
  export default Footer;