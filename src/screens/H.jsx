import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import Range from "rc-slider";
import { getOrientation } from 'get-orientation/browser'
import ImgDialog from '../core/utils/imgDialog'
import { getCroppedImg, getRotatedImage } from '../core/utils/canvasUtils'

const ORIENTATION_TO_ANGLE = {
  '3': 180,
  '6': 90,
  '8': -90,
}

const H = () => {
  const [imageSrc, setImageSrc] = React.useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, rotation])

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)

      // apply rotation if needed
      const orientation = await getOrientation(file)
      const rotation = ORIENTATION_TO_ANGLE[orientation]
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
      }

      setImageSrc(imageDataUrl)
    }
  }

  return (
    <div className='w-full py-20 flex justify-center bg-white'>
      {imageSrc ? (
        <React.Fragment>
          <div className="relative h-[200px] w-full sm:h-[400px]">
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="p-4 flex flex-row items-stretch sm:flex-col sm:items-center">
            <div className="flex flex-1 items-center">
              <p>
                Zoom
              </p>
              <Range
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(e, zoom) => setZoom(zoom)}
                className="py-6 px-0 sm:ml-4 flex-row items-center mx-16 sm:flex-none sm:items-start"
              />
            </div>
            <div className="">
              <p>
                Rotation
              </p>
              <Range
                value={rotation}
                min={0}
                max={360}
                step={1}
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </div>
            <button
              onClick={showCroppedImage}
              className="px-6 py-2 text-white bg-blue-400 hover:bg-blue-500 cursor-pointer transition rounded-sm">
              Show Result
            </button>
          </div>
          <ImgDialog img={croppedImage} onClose={onClose} />
        </React.Fragment>
      ) : (
        <input type="file" onChange={onFileChange} accept="image/*" />
      )}
    </div>
  )
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

export default H