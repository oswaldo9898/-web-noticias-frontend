import { useState } from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { ImageSelected } from './../ImageSelected';
import { BoxDragAndDrop } from './../BoxDragAndDrop';


const DragAndDrop = (props:any) => {

  //const [images, setImages] = useState<ImageListType>([]);
  const [urlImage, setUrlImage] = useState('')
  const [loading, setLoading] = useState(false);

  const handleChange = (imageList: ImageListType) => props.setImages(imageList);

  const onUpload = () => {
    setLoading(true);
    //console.log(images[0].file!);
    setLoading(false);
    props.setImages([]);
  }

  return (
    <>
      <ImageUploading multiple={false} maxNumber={1} value={props.images} onChange={handleChange}>
        {({
          imageList,
          onImageUpload,
          dragProps,
          isDragging,
          onImageRemove,
          onImageUpdate,
        }) => (
          <>
            {
              imageList[0]
                ? <ImageSelected onImageRemove ={onImageRemove} onImageUpdate={onImageUpdate} onUpload={onUpload} loading={loading}  img={imageList[0].dataURL!} />
                : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
            }
          </>
        )}
      </ImageUploading>
    </>)
}


export { DragAndDrop };