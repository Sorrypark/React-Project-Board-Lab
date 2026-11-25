function PostItem({ post }) {
  return (
    <li className="post-item">
      <div className="post-info">
        <strong>{post.title}</strong>
        <p>작성자 {post.author} · 좋아요 {post.likes}</p>
      </div>
    </li>
  );
}

export default PostItem;
