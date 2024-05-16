import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dvdx4mvqx', 
  api_key: '193214115283467', 
  api_secret: process.env.api_secret
});
exports.uploadImage=async(file)=>{
    try {
        const data=await cloudinary.uploader.upload(file,{resource_type:'auto'})
        return data
    } catch (error) {
        console.log(error)
    }
}
exports.removeImage=async(data)=>{
    try {
        const result=await cloudinary.uploader.destroy(data)
        return result
    } 
    catch (error) {
        console.log(error)
    }
}