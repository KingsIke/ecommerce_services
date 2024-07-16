// import multer from 'multer'

 import { errors } from '@elastic/elasticsearch';
import cloudinary, {UploadApiErrorResponse, UploadApiResponse} from 'cloudinary'

// import { CloudinaryStorage } from 'multer-storage-cloudinary'


// import dotenv from 'dotenv'


// dotenv.config()


export const imageUploads = (file:string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiErrorResponse | UploadApiErrorResponse | undefined> => {
  return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                overwrite,
                invalidate,
                resource_type: "auto"
            },
            (
                error:UploadApiErrorResponse | undefined,
                result: UploadApiResponse | undefined
            )=> {
                if(error){
                    return resolve(error)
                }
                return reject(result)
            }
        )
    // resolve(undefined);
  });
}
export const videoUploads = (file:string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiErrorResponse | UploadApiErrorResponse | undefined> => {
  return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                overwrite,
                invalidate,
                resource_type: "video",
                chunk_size:50000
            },
            (
                error:UploadApiErrorResponse | undefined,
                result: UploadApiResponse | undefined
            )=> {
                if(error){
                    return resolve(error)
                }
                return reject(result)
            }
        )
    // resolve(undefined);
  });
}




// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });

//   console.log(process.env.CLOUDINARY_CLOUD_NAME )
//   const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: async(req,files)=> {
//         return {
//           folder: "FOOD",
//           public_id: `${files.fieldname}-${Date.now()}`
//         }
//     },
//   });
  

//   export const upload = multer({storage:storage})