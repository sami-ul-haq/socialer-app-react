import React, { useContext, useState } from "react";
import SignInButton from "../../components/signin-button/SignInButton";
import { userContext } from "../../context/userContext";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import "./CreatePost.css";
import { db, storage } from "../../firebase";
import makeid from "../../helpers/function";
import firebase from "firebase";

const CreatePost = () => {
  const [user, setUser] = useContext(userContext).user;
  const [caption, setCaption] = useState();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      let selectedImageSrc = URL.createObjectURL(e.target.files[0]);

      let imagePreview = document.getElementById("image-preview");
      imagePreview.src = selectedImageSrc;
      imagePreview.style.display = "block";
    }
  };

  const handelUploadImage = () => {
    if (image) {
      let imageName = makeid(10);
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

      uploadTask.on(
        "state_change",
        (snapshot) => {
          //   progress
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          // get downloa url
          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                photoUrl: imageUrl,
                username: user.email.replace("@gmail.com", ""),
                userPhotoUrl: user.photoURL,
              });
            });
        }
      );
    }
  };

  return (
    <div className="createPost">
      {user ? (
        <div className="create-post-logged-in">
          <p>Create Post</p>
          <div className="create-post-content">
            <textarea
              className="create-post-textarea"
              placeholder="Enter Your Descripton Here..."
              rows="3"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="createpost-imagepreview">
            <img id="image-preview" alt="not-found" />
          </div>

          <div className="createpost-cta">
            <div className="createpost-uploadimage">
              <label htmlFor="fileInput">
                <AddAPhotoIcon
                  style={{ cursor: "pointer", fontSize: "20px" }}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleImageChange}
              />
            </div>
            <button
              className="createpost-uploadbtn"
              onClick={handelUploadImage}
              style={{
                color: caption ? "#000" : "lightgrey",
                cursor: "pointer",
              }}
            >
              {`Upload ${progress !== 0 ? progress : ""}  `}
            </button>
          </div>
        </div>
      ) : (
        <div className="not-logged-in">
          <SignInButton />
          <p className="post-comment">to Post & Comment</p>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
