// src/pages/Comments.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Comments() {
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('comments');
    return saved ? JSON.parse(saved) : [];
  });
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          Your Feedback
        </h1>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your thoughtful feedback here..."
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
        {comments.length > 0 ? (
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="text-2xl font-bold text-black mb-4">
              Recent Feedback
            </h2>
            <ul className="space-y-3">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="border-b last:border-none py-2 text-gray-800"
                >
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500">
            No feedback yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
}

export default Comments;
