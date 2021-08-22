import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        message="WOW this works"
        timestamp="This is a timestamp"
        username="poojaharugoppp"
        image="https://cdn-images.welcometothejungle.com/vyBWq6qP0gz3z9ctHYGMcMYE5jgPf3qJRsA37wkwhOk/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc"
      />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        message="WOW this works"
        timestamp="This is a timestamp"
        username="poojaharugoppp"
        image="https://pbs.twimg.com/media/EyElBJyWUAY-2YE.jpg"
      />
    </div>
  );
}

export default Feed;
