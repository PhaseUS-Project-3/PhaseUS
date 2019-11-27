import React from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <br/>
            <br/>
            <br/>
            <img src={'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png'}  />
             <h1 style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </h1>
          </div>;
    }
}
export default NotFoundPage;