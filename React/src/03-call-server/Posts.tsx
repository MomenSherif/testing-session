import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchPosts, Post } from '../api/posts';

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts()
      .then(posts => {
        setIsLoading(false);
        setPosts(posts);
      })
      .catch(() => {
        setIsLoading(false);
        setError('Something went wrong');
      });
  }, []);

  if (isLoading) return <p>Loading ... 🤓</p>;

  if (error) return <div role="alert">{error}</div>;

  if (!posts?.length) return <div>No posts for today</div>;

  return (
    <ul style={{ maxWidth: 750, fontSize: 'smaller', textAlign: 'left' }}>
      {posts?.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
