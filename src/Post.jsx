import './Post.css'
export default function Post(post){
    const {title, userId, id, body} = post.post;
    return(
        <div className="post" >
            <h4>Title: {title} </h4>
            <p><small>userId: {userId}  </small></p>
            <p><small>postId: {id}  </small></p>
            <p> {body} </p>
        </div>
    )

}