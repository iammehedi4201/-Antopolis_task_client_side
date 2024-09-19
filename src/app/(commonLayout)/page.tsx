"use client";
import CategoryModal from "@/components/CategoryModal/CategoryModal";
import PetModal from "@/components/Pet/PetModal/PetModal";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import PetCard from "@/components/Pet/PetCard/PetCard";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";
import { setCategory } from "@/redux/api/category/categorySlice";
import {
  useDeletePetMutation,
  useGetAllPetsQuery,
} from "@/redux/api/pets/petApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import DeleteIcon from "@mui/icons-material/Delete";
import { toggleCardSelection } from "@/redux/api/pets/petSlice";
import { toast } from "sonner";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.categroy.category);
  const selectedCards = useAppSelector((state) => state.pet.selectedPet);
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState<boolean>(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] =
    useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const query: Record<string, unknown> = {};

  // if category is selected
  if (category) {
    query.category = category;
  }

  // pagination
  query.page = page;
  query.limit = limit;

  // delete animal
  const [deleteAnimal] = useDeletePetMutation();

  //get all animals
  const { data: animals, isLoading } = useGetAllPetsQuery({ ...query });

  // meta data of animals
  const meta = animals?.meta;
  console.log("meta", meta);

  //get all categories
  const { data: categories, isLoading: isCategoryLoading } =
    useGetAllCategoryQuery({});

  const handleClick = (text: string) => {
    dispatch(setCategory(text.toLowerCase()));
  };

  // handle card click to select or deselect
  const handleCardClick = (id: string) => {
    dispatch(toggleCardSelection(id));
  };

  // handle delete animal
  const handleDelete = async () => {
    const toastId = toast.loading("Deleting Animals...");
    try {
      const response = await deleteAnimal(selectedCards).unwrap();
      if (response.success) {
        toast.success("Animal Deleted Successfully", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.data?.errorDetails, { id: toastId });
    }
  };

  // handle pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // loading spinner
  if (isLoading || isCategoryLoading) {
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
          {/* Category Button */}
          <Grid
            size={{ mobile: 6, laptop: 7 }}
            justifyContent={"space-between"}
            alignContent={"center"}
          >
            <Button
              variant="outlined"
              sx={{
                width: "148px",
                height: "46px",
                padding: "14px, 20px, 14px, 24px",
                borderRadius: "100px",
                border: "1px solid #058F34",
                marginRight: "24px",
                color: "#058F34",
                textTransform: "capitalize",
                mb: 2,
              }}
              onClick={() => handleClick("")}
            >
              All Animals
            </Button>
            {categories?.data.map((category: any) => (
              <Button
                key={category._id}
                variant="outlined"
                sx={{
                  width: "148px",
                  height: "46px",
                  padding: "14px, 20px, 14px, 24px",
                  borderRadius: "100px",
                  border: "1px solid #058F34",
                  marginRight: "24px",
                  color: "#058F34",
                  textTransform: "capitalize",
                  mb: 2,
                }}
                onClick={() => handleClick(category?.name)}
              >
                {category?.name}
              </Button>
            ))}
          </Grid>

          {/* Add Animal and Category Button and delete button */}

          <Grid size={{ mobile: 6, laptop: 4 }}>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
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
              <Box component={"div"}>
                <IconButton
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    fontSize: "24px",
                    border: "1px solid red",
                    marginLeft: "16px",
                    padding: "5px",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s, transform 0.3s",
                    "&:hover": {
                      backgroundColor: "darkred",
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={handleDelete}
                >
                  <DeleteIcon
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Animal  Section  */}
      <Box
        sx={{
          my: 8,
          padding: "0 30px",
        }}
      >
        <Grid container spacing={2}>
          {animals?.data && animals.data.length > 0 ? (
            animals.data.map((animal: any) => (
              <Grid size={{ mobile: 6, laptop: 2 }} justifyContent={"center"}>
                <PetCard
                  {...animal}
                  isSelected={(selectedCards ?? []).includes(animal._id)}
                  onClick={() => handleCardClick(animal._id)}
                />
              </Grid>
            ))
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%", // Full width of the viewport
                height: "100vh", // Full height of the viewport
                backgroundColor: "black", // Light grey background
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ffcccb", // Light red background
                  padding: "20px 40px", // Padding around the text
                  borderRadius: "10px", // Rounded corners
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
                  textAlign: "center", // Center text alignment
                }}
              >
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontWeight: "bold", // Bold text
                    fontSize: "1.5rem", // Larger font size
                  }}
                >
                  No Animals Found
                </Typography>
              </Box>
            </Box>
          )}
        </Grid>
      </Box>

      {/* Pagination */}
      <Stack spacing={2} width={"100%"}>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            borderRadius: "4px",
            padding: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            "& .MuiPaginationItem-root": {
              color: "white", // Text color
              "&.Mui-selected": {
                backgroundColor: "white", // Background color for selected item
                color: "#058F34", // Text color for selected item
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color on hover
              },
            },
          }}
          count={meta?.totalPages}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default HomePage;
