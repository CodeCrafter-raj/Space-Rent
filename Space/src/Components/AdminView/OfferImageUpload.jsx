import React from 'react'
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useRef } from "react";
import axios from "axios";

const ImageUpload = (  {imageFile,setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl, 
  imageLoadingState,
  isEditMode,
  setImageLoadingState}) => 
{
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    //console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    //console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }


  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:5500/api/admin/facility/upload-image",
      data
    );
    //console.log(response, "response");

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="w-full  mt-4 max-w-md mx-auto ">

    <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
    <div  onDragOver={handleDragOver} onDrop={handleDrop}  className='border-2 border-dashed rounded-lg p-4'>
    <Input  id="image-upload" type="file" className="hidden" 
           ref={inputRef}
          onChange={handleImageFileChange}
         // disabled={isEditMode}
        />
      
      {
  !      imageFile ? (
          <Label htmlFor="image-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
          {/* Ensure UploadCloudIcon is correctly imported and styled */}
          <UploadCloudIcon className="w-10 h-10 text-blue-500 bg-white mb-2" />
          <span>Drag & drop or click to upload image</span>
          </Label>
          ) : 
            imageLoadingState ? (
              <Skeleton className="h-10 bg-emerald-300" />
            ):(
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>

            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
    </div>
    </div>
  )
}

export default ImageUpload
