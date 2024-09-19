"use client";
import CategoryModal from "@/components/CategoryModal/CategoryModal";
import PetModal from "@/components/Pet/PetModal/PetModal";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useState } from "react";

import bee from "@/assets/Pets/Bee.png";
import { useGetAllPetsQuery } from "@/redux/api/pets/petApi";
import PetCard from "@/components/Pet/PetCard/PetCard";
import { setCategory } from "@/redux/api/category/categorySlice";
import { useAppDispatch } from "@/redux/hook";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState<boolean>(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] =
    useState<boolean>(false);
  const query: Record<string, unknown> = {};

  //get all animals
  const { data: animals, isLoading } = useGetAllPetsQuery({ ...query });

  // meta data of animals
  const meta = animals?.meta;

  const handleClick = (text: string) => {
    dispatch(setCategory(text.toLowerCase()));
  };

  // loading spinner
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {/* header */}
      <Box>
        <Grid container justifyContent={"center"}>
          <Grid size={{ mobile: 6, laptop: 7 }}>
            <Button
              variant="outlined"
              sx={{
                width: "148px",
                height: "46px",
                padding: "14px, 20px, 14px, 24px",
                borderRadius: "100px",
                gap: "4px",
                border: "1px solid #058F34",
                marginRight: "24px",
                color: "#058F34",
                textTransform: "capitalize",
              }}
              onClick={() => handleClick("Land Animal")}
            >
              Land Animal
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "140px",
                height: "46px",
                padding: "14px, 20px, 14px, 24px",
                borderRadius: "100px",
                gap: "4px",
                border: "1px solid #EF0D0D",
                marginRight: "14px",
                color: "#EF0D0D",
                textTransform: "capitalize",
              }}
            >
              Bird
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "140px",
                height: "46px",
                padding: "14px, 20px, 14px, 24px",
                borderRadius: "100px",
                gap: "4px",
                border: "1px solid #EF0D0D",
                marginRight: "24px",
                color: "#EF0D0D",
                textTransform: "capitalize",
              }}
            >
              Fish
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "140px",
                height: "46px",
                padding: "14px, 20px, 14px, 24px",
                borderRadius: "100px",
                gap: "4px",
                border: "1px solid #EF0D0D",
                color: "#EF0D0D",
                textTransform: "capitalize",
              }}
            >
              Inset
            </Button>
          </Grid>
          <Grid size={{ mobile: 6, laptop: 4 }}>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <Box component={"div"}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "140px",
                    height: "46px",
                    padding: "14px, 20px, 14px, 24px",
                    borderRadius: "100px",
                    gap: "4px",
                    border: "1px solid white",
                    marginRight: "16px",
                    textTransform: "capitalize",
                  }}
                  onClick={() => setIsAddPetModalOpen(true)}
                >
                  Add Animal
                </Button>
                <PetModal
                  open={isAddPetModalOpen}
                  setOpen={setIsAddPetModalOpen}
                />
              </Box>
              <Box component={"div"}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "164px",
                    height: "46px",
                    padding: "14px, 20px, 14px, 24px",
                    borderRadius: "100px",
                    gap: "4px",
                    border: "1px solid white",
                    textTransform: "capitalize",
                  }}
                  onClick={() => setIsAddCategoryModalOpen(true)}
                >
                  Add Category
                </Button>
                <CategoryModal
                  open={isAddCategoryModalOpen}
                  setOpen={setIsAddCategoryModalOpen}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* body  */}
      <Box
        sx={{
          my: 8,
          padding: "0 30px",
        }}
      >
        <Grid container spacing={2}>
          {animals?.data.map((animal: any) => (
            <Grid key={animal._id} size={{ mobile: 6, laptop: 2 }}>
              <PetCard {...animal} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
