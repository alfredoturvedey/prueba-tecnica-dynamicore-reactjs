import {FC} from "react";
import { User } from '../../../types/user';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';


const UserList: FC<{ users: User[] }> = ({ users }) => {

  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" component="div" sx={{ p: 2 }}>
        Usuarios
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user, idx) => (
            <TableRow key={idx}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;