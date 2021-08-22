import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        title="Pooja Harugop"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        title="Tejashwini Matgar"
      />
      <Story
        image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        title="Pooja N"
      />
      <Story
        image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        title="Sucheta Kulkarni"
      />
      <Story
        image="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I4fhZvgQ_hTSojXWgeDTmDX8_DroOrrKrh5W17ZEw=s83-c-mo"
        title="Saket Shivam"
      />
    </div>
  );
}

export default StoryReel;
