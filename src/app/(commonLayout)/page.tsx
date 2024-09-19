"use client";
import PetModal from "@/components/Pet/PetModal/PetModal";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const HomePage = () => {
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState<boolean>(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] =
    useState<boolean>(false);

  return (
    <Box>
      <Grid container>
        <Grid size={{ mobile: 6, laptop: 8 }}>
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
            }}
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
            }}
          >
            Inset
          </Button>
        </Grid>
        <Grid size={{ mobile: 6, laptop: 4 }}>
          <Stack direction={"row"}>
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
                }}
              >
                Add Category
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
