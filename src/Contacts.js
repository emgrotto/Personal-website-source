import React from 'react';
import './index.css';
import './Contacts.css';

class Contacts extends React.Component {
    render() {
        return (
            <div className="c" id="contacts">
                <p className="title_contacts">Contacts</p>
                <br></br>

                
                <p><b>email</b> - emgrotto@gmail.com</p>
                <p><b>github</b> - https://github.com/emgrotto</p>
                <p><b>linkedIn</b> - https://www.linkedin.com/in/emma-grotto/</p>
                <p><b>phone</b> - +1 774 408 0901</p>
            </div>
        )
    }

}

export default Contacts;