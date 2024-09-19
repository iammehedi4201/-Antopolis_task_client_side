import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import Modal from "@/components/Shared/PHModal/Modal";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PetModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    // const data = modifyPayload(values);
    try {
    } catch (err: any) {}
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Add Animal">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={"16px"}>
          <Grid size={{ mobile: 6, laptop: 12 }}>
            <PHInput name="title" label="Title" fullWidth={true} />
          </Grid>
          <Grid size={{ mobile: 6, laptop: 12 }}>
            <PHFileUploader
              name="file"
              label="Image Upload"
              sx={{
                width: "100%",
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
