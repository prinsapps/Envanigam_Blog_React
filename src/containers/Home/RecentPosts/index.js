import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://s3-eu-west-2.amazonaws.com/envanigam.co.uk/wp-content/uploads/2020/01/09035054/iStock-962914640.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Grow your business with Envanigam</h2>
                <span></span>
                <p>Add or claim your business, keep your page up to date, respond to reviews, view click and call reports with simple powerful tools.</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts