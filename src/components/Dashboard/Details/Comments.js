import React from 'react';
import "./Comments.css"

function Comments() {
  // Sample data for comments
  const comments = [
    { id: 1, name: 'John Doe', comment: 'This is a great tribute!' },
    { id: 2, name: 'Jane Smith', comment: 'I remember the good times we had.' },
    // Add more comments as needed
  ];

  // Sample data for biography
  const biography = {
    name: 'Deceased Person Name',
    birthDate: 'January 1, 1980',
    deathDate: 'March 15, 2022',
    description:  `Maria Rodriguez, a beloved chef, dedicated her life to the art of gastronomy, creating culinary masterpieces that brought joy to countless palates. With a Bachelor's degree in Landscape Architecture from Highschool-Precious Blood Riruta, Maria's journey into the world of cuisine was a delightful twist of fate.

    Her kitchen was her canvas, and her dishes were vibrant works of art. Maria's innovative fusion of flavors and dedication to fresh, local ingredients earned her acclaim and a loyal following. Whether she was crafting exquisite fine dining experiences or comforting homestyle meals, Maria's passion for food was evident in every bite.
    
    Beyond her culinary prowess, Maria's warm personality and generosity endeared her to all who had the privilege of savoring her creations. Her legacy lives on through the countless lives she touched with her delicious and heartwarming dishes, forever cherished by those who had the pleasure of dining at her table.
    Whether she was crafting exquisite fine dining experiences or comforting homestyle meals, Maria's passion for food was evident in every bite. Beyond her culinary prowess, Maria's warm personality and generosity endeared her to all who had the privilege of savoring her creations. Her legacy lives on through the countless lives she touched with her delicious and heartwarming dishes, forever cherished by those who had the pleasure of dining at her table.`,// Add more biography details as needed
  };

  const handleDeleteComment = () => {
    // Implement functionality to add a secondary profile manager.
  }

  const handleMoveCommentUp = () => {
    // Implement functionality to add a secondary profile manager.
  }



  return (
    <div className="comments-container">
      <div className="biography">
        <h2>{biography.name}</h2>
        <p><strong>Date of Birth:</strong> {biography.birthDate}</p>
        <p><strong>Date of Passing:</strong> {biography.deathDate}</p>
        <p>{biography.description}</p>
        {/* Add more biography details as needed */}
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <div className="comment-actions">
                <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                <button onClick={() => handleMoveCommentUp(comment.id)}>Move Up</button>
              </div>
              <div className="commenter-name">{comment.name}</div>
              <div className="comment-text">{comment.comment}</div>
            </li>
          ))}
        </ul>
        {/* Add a form for users to add new comments if needed */}
      </div>
    </div>
  );
}

export default Comments;

