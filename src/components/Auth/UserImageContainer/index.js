import { useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '../../../utils/Icon';
import styles from'./index.module.scss';
const UserImageContainer = ({  photo, savePhoto, deletePhoto}) => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if(acceptedFiles.length){
        savePhoto(
          Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]), id:uuidv4() })
        )
      }
    }
  })
  const renderImage = () => {
    return <div className={styles.photoContainer}>
      <div className={styles.deletePhotoContainer} onDoubleClick={deletePhoto}>
        <div className={styles.deletePhoto} onClick={deletePhoto}>
          <Icon
            icon="times"
            size="2x" 
            color="white" 
            className="formImageDelete"
          />
        </div>
      </div>
      <div className={styles.photoWrapper}>
        <img src={photo.preview} className={styles.photo}/>
      </div>
    </div>   
  
  }
  const getImageContainerDragStyles = () => {
    return isDragActive ? styles.userImageDropLayerDragActive : '' 
  }
  const renderDropLayer = () => {
    return ( 
      <div className={`${styles.userImageDropLayer} ${getImageContainerDragStyles()}`} {...getRootProps()}>
        <div className={styles.uploadImage}>
           <Icon
            icon="upload"
            size="4x" 
            color="white" 
            className="formImageUpload"
          />
        </div>
        <input {...getInputProps()} />
      </div>
    )
  }

  const renderUserImageContent = () => {
    if(photo){
      return renderImage()
    }
    return renderDropLayer()
  }

  return (
    <div className={styles.userImageContainer}>
      {renderUserImageContent()}
    </div>
  );
}

export default UserImageContainer
