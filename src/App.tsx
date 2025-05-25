import { FC } from "react";

import "./App.css";
import Users from "./components/users";
import UserForm from "./components/users/userform";
import { Grid, Typography } from "@mui/material";

const App: FC = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }} mt={6}>
      <Grid size={12}>
        <Typography variant="h4" component="div" sx={{ p: 2 }}>
          Componentes
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Users />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <UserForm />
      </Grid>
    </Grid>
  );
};

export default App;
