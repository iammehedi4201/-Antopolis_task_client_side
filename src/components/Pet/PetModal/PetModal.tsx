import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import Modal from "@/components/Shared/PHModal/Modal";
import { useAddPetMutation } from "@/redux/api/pets/petApi";
import { uploadImgToIMGBB } from "@/utils/uploadImgToIMGBB";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type DefaultValues = {
  name: string;
  category: string;
  image: string;
};

const AnimalSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  file: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Input not instance of File",
    })
    .refine((file) => file && file.size > 0, { message: "Image is required" }),
});

const defaultValues: DefaultValues = {
  name: "",
  category: "",
  image: "",
};

const PetModal = ({ open, setOpen }: TProps) => {
  //: Create a new animal
  const [createAnimal] = useAddPetMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    let toastId = toast.loading("Creating Animal...");
    try {
      const { imgUrl } = await uploadImgToIMGBB(values.file);
      const response = await createAnimal({
        ...values,
        category: values.category.toLowerCase(),
        image: imgUrl,
      }).unwrap();
      if (response.success) {
        toast.success("Animal Created Successfully", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err?.data?.errorDetails, { id: toastId });
    }
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Create Animal"
      sx={{
        padding: "5px",
      }}
      dialogeContentSx={{
        width: "380px",
        height: "310px",
      }}
    >
      <PHForm
        onSubmit={handleFormSubmit}
        resolver={zodResolver(AnimalSchema)}
        defaultValues={defaultValues}
      >
        <Grid container spacing={"16px"}>
          <Grid size={{ mobile: 6, laptop: 12 }}>
            <PHInput
              name="name"
              label="Animal Name"
              fullWidth={true}
              size="medium"
            />
          </Grid>
          <Grid size={{ mobile: 6, laptop: 12 }}>
            <PHInput
              name="category"
              label="Category Name"
              fullWidth={true}
              size="medium"
            />
          </Grid>
          <Grid size={{ mobile: 6, laptop: 12 }}>
            <PHFileUploader
              name="file"
              label="Image Upload"
              sx={{
                width: "100%",
                height: "52px",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                color: "black",
              }}
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: "16px",
            bgcolor: "black",
            color: "white",
            borderRadius: "8px",
            padding: "4px, 20px, 14px, 16px",
            height: "46px",
          }}
          type="submit"
          fullWidth={true}
        >
          Create
        </Button>
      </PHForm>
    </Modal>
  );
};

export default PetModal;
