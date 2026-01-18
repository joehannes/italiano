const CLOUDINARY_CLOUD_NAME = 'dkxlhxpe4'
const CLOUDINARY_UPLOAD_PRESET = 'italiano_uploads' // This needs to be configured in Cloudinary

export async function uploadImage(file: File): Promise<string | null> {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    if (response.ok) {
      const data = await response.json()
      return data.secure_url
    } else {
      console.error('Failed to upload image:', response.statusText)
      return null
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error)
    return null
  }
}

export function getCloudinaryUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`
}
