import { Box, Typography } from "@mui/material";
import Image from "next/image";

type PetCardProps = {
  image: string;
  name: string;
  category: string;
};

const PetCard = ({ image, name, category }: PetCardProps) => {
  return (
    <Box
      sx={{
        "& img": {
          display: "block",
          width: "160px",
          height: "160px",
          margin: "0 auto",
        },
      }}
    >
      <Image src={image} width={130} height={25} alt="bee" />
      <Typography
        variant="h6"
        color="white"
        textAlign={"center"}
        mt={2}
        sx={{
          textTransform: "uppercase",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default PetCard;
