// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios to fetch data
import './HomePage.css'; // Import styles

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch posts from API when the component mounts
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts') // API endpoint
      .then((response) => {
        setPosts(response.data); // Set posts in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Error fetching data'); // Set error message if the request fails
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="min-h-screen bg-gray-100 p-6 content">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
        <p className="text-xl text-gray-600">Explore and learn more about React!</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Posts</h2>

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Posts grid */}
        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 capitalize">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
