export default function News(props)
{
    
    return (

        <div className="news">
            
            <div className="news-img">

                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}/>:
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtrOvilptARRLYRSFsvk2kLhv_NULKa8nfOBv22boA4V7hjYderUSk6YcHw&s"/>
                }
                

            </div>
            <h3>{props.article.title}</h3>
            <p>{props.article.description?.substring(0,100).concat("...")}</p>
            <a href={props.article.url} target="_blank">
                <button>Read More</button></a>


            <div className="source">
                <p>{props.article.author}</p>
                <p>{props.article.source.name}</p>

            </div>
            

        </div>
    )
}