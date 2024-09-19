import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input, Typography } from "@mui/material";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  rules?: any; // Add rules prop for validation
};

export default function PHFileUploader({ name, label, sx, rules }: TProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [fileName, setFileName] = React.useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules} // Apply validation rules
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{ ...sx }}
            >
              {fileName || label || "Upload file"}
              <Input
                {...field}
                type="file"
                onChange={(e) => {
                  const file = (e?.target as HTMLInputElement).files?.[0];
                  if (file) {
                    setFileName(file.name);
                    onChange(file);
                  }
                }}
                style={{ display: "none" }}
              />
            </Button>
            {errors[name] && (
              <Typography color="error" variant="body2" mt={1} ml={2}>
                {typeof errors[name]?.message === 'string' ? errors[name]?.message : ''}
              </Typography>
            )}
          </>
        );
      }}
    />
  );
}
