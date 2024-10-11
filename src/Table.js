import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import { AuthContext } from './App';
import './Table.css';

const rows = [...Array(100).keys()].map((n) => ({ id: n, name: `Item ${n}` }));

function TableComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { isAuthenticated } = useContext(AuthContext);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [user] = useState({
    name: 'Hello, Michael',
    bio: 'Lorem ipsum dolor sit amet.',
  });

  return (
    <div className="table-container">
      <div className="user-info">
        {isAuthenticated && (
          <div>
            <h4>{user.name}</h4>
            <h4>{user.bio}</h4>
          </div>
        )}
      </div>

      <TableContainer>
        <Table className="responsive-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        className="table-pagination"
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default TableComponent;
