import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import Modal from "@/components/Shared/PHModal/Modal";
import { useCreateCategoryMutation } from "@/redux/api/category/categoryApi";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoryModal = ({ open, setOpen }: TProps) => {
  // Create a new category
  const [createCategory] = useCreateCategoryMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Creating Category...");
    try {
      const response = await createCategory({
        ...values,
      }).unwrap();

      if (response.success) {
        toast.success("Category Created Successfully", { id: toastId });
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.data?.errorDetails, { id: toastId });
    }
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Save"
      dialogeContentSx={{
        width: "352px",
        height: "150px",
      }}
    >
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={"16px"}>
          <Grid size={{ mobile: 12, laptop: 12 }}>
            <PHInput
              name="name"
              label="Category Name"
              fullWidth={true}
              size="medium"
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

export default CategoryModal;
