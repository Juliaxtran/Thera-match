import './post.css'

export default function Post() {
  return (
    <div className="blogPost" >
      <img
        className="blogPostImg"
        src="/images/other/mental-health-bulb.jpeg"
        alt=""
      />
      <div className="blogPostInfo">
        <div className="blogPostCats">
          <span className="blogPostCat">Mental Health</span>
          <span className="blogPostCat">LGBT</span>
        </div>
        <span className="blogPostTitle">Sed ut perspiciatis unde omnis iste natus error</span>
        <hr />
        <span className="blogPostDate">1 hour ago</span>
      </div>
      <p className="blogPostDescription">
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
      </p>
    </div>
  )
}
