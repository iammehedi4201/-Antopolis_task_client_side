import { Container } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Container
        sx={{
          my: 2,
          p: 2,
          minHeight: "100vh",
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default CommonLayout;
