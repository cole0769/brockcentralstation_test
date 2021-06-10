const NewsFeed = (props) => {
    const article = props.feeds;

    return (
        <div className='news-list'>
            {article.map((feeds) => (
            <div className="article" key={feeds.id}>
                <div className='title'>
                    <h2>{feeds.title}</h2>
                </div>
                <div className='body'>
                    <p>{feeds.body}</p>
                </div>
                <div className='dateline'>
                    <p><button onClick='test'><i class="fa fa-pencil-square-o" aria-hidden="true"/></button>  Created: {feeds.createdUTC} Posted by: {feeds.author}</p>
                </div>
                
            </div>
            ))}
        </div>
    );
}

export default NewsFeed;