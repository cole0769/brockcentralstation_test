import { useState} from 'react';
import NewsFeed from '../../../components/news-feed/news-feed.component';
import './news.styles.scss';

const News = () => {
    const [newsFeed] = useState([
        {
            "title": "Welcome to Brock Central Station",
            "body": "We've provided a transit station for you to locate your departure platform and quickly travel to your destination. All aboard!",
            "bodyType": "text",
            "author": "Coleman Gardner",
            "status": "live",
            "createdUTC": "2021-06-01T13:20:21.130Z",
            "EditedUTC": "2021-06-01T13:20:21.130Z",
            "ExpiresUTC": "2021-12-01T13:20:21.130Z",
            "id": 1
        },
        {
            "title": "New Phone System to Lauch",
            "body": "<b>Finally!/b> The Nextiva cloud based phone system will launch on Thursday, September 10th. Please be prepared to use the new headsets and answering from the desktop.",
            "bodyType": "text",
            "author": "Coleman Gardner",
            "status": "expired",
            "createdUTC": "2021-06-01T13:20:21.130Z",
            "EditedUTC": "2021-06-01T13:20:21.130Z",
            "ExpiresUTC": "2020-12-01T13:20:21.130Z",
            "id": 2
        }
    ])
    return (
        <div className="news">
            <button onClick='test'><i class="fa fa-plus"></i> Add News</button>
            <NewsFeed feeds={newsFeed.filter((newsFeed) => newsFeed.status === 'live')} title='Company News'/>
        </div>
    )
}
    
export default News;
