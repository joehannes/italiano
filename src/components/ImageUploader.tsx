import { FC, useState } from 'react'
import { uploadImage } from '../lib/cloudinary'

interface ImageUploaderProps {
  onImageUploaded: (url: string) => void
  currentImage?: string
}

const ImageUploader: FC<ImageUploaderProps> = ({ onImageUploaded, currentImage }) => {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(currentImage || '')

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Upload
    setUploading(true)
    setError('')
    const url = await uploadImage(file)
    setUploading(false)

    if (url) {
      onImageUploaded(url)
    } else {
      setError('Failed to upload image. Please try again.')
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={uploading}
            className="block text-sm"
          />
        </div>
        {uploading && <span className="text-blue-600">Uploading...</span>}
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      {preview && (
        <div>
          <p className="text-sm font-semibold mb-2">Preview</p>
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  )
}

export default ImageUploader
