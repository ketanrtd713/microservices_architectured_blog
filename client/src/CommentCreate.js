import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    console.log("done");

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
