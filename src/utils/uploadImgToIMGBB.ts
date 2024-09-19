import axios from "axios";
import { FieldValues } from "react-hook-form";

type TUploadImgToIMGBBResponse = {
  imgUrl: string;
  deleteImgUrl: string;
};

export const uploadImgToIMGBB = async (
  file: FieldValues
): Promise<TUploadImgToIMGBBResponse> => {
  // Image Hosting URL
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN}`;

  let imgUrl: string = "";
  let deleteImgUrl: string = "";

  if (file) {
    console.log("file", file);

    const formData = new FormData();
    formData.append("image", file as any);
    const imgHostResponse = await axios.post(img_hosting_url, formData);
    console.log("imgHostResponse", imgHostResponse?.data?.data);
    imgUrl = imgHostResponse?.data?.data?.display_url;
    deleteImgUrl = imgHostResponse?.data?.data?.delete_url;
  }

  return { imgUrl, deleteImgUrl };
};
