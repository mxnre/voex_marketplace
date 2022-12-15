import React,{ useState } from "react";
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";

interface Props {
  onChange: (images: ImageListType) => void,
  images: ImageListType,
}

export default function ImageUpload({onChange, images}: Props) {

  return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img className="text-center" src={image.dataURL} alt="" width="200" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update </button>
                  <button onClick={() => onImageRemove(index)}> Remove</button>
                </div>
              </div>
            ))}
            {
              (!images[0]) ?
                (<div className="upload__image-wrapper">
                  <button className="d-create-file"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                </div>) : ''
            }
          </>
        )}
      </ImageUploading>
    </div>
  );
}