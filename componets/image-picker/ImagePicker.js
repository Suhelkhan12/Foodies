'use client'
import { useRef, useState } from 'react';
import Image from 'next/image'
import classes from './image-picker.module.css';

const ImagePicker = ({label,name}) => {
    const [image , setImage] = useState();
    const imageInputRef = useRef()

    const handleImagePicked = (event)=>{
        /**
         * in this input field is targeted for any change it stores the value of selected file into an array. Why array? because we can select multiple files in a file upload input field and all of them will be stored in an array since here we are selecting only one file so everytime we will only read the first value in that array
         */
        const file = event.target.files[0];

        if(!file){
            setImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = ()=>{
            setImage(fileReader.result)
        }

        fileReader.readAsDataURL(file);
    }

    const handlePickButtonClick = ()=>{
        imageInputRef.current.click()
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!image && <p>No image is picked</p> }
                {image && <Image src={image} alt='Picked image by the user' fill/>}
            </div>
            <input ref={imageInputRef} onChange={handleImagePicked} type="file" id={name} className={classes.input} accept='image/png, image/jpeg' name={name} required />
            <button className={classes.button} type='button' onClick={handlePickButtonClick}>Pick an image</button>
        </div>
    </div>
  )
}

export default ImagePicker