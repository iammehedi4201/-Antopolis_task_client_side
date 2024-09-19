import { Box, Typography } from "@mui/material";
import Image from "next/image";

type PetCardProps = {
  image: string;
  name: string;
  category: string;
  isSelected: boolean;
  onClick: () => void;
};

const PetCard = ({
  image,
  name,
  category,
  isSelected,
  onClick,
}: PetCardProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: isSelected ? "0px 4px 12px rgba(0, 143, 52, 0.6)" : "0px 2px 4px rgba(0, 0, 0, 0.05)",
        borderRadius: "2px",
        "& img": {
          margin : "auto",
        }
      }}
    >
      <Image src={image} width={160} height={160} alt={name} />
      <Typography
        variant="h6"
        mt={2}
        sx={{ textTransform: "uppercase" }}
        color={"white"}
        textAlign={"center"}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default PetCard;
