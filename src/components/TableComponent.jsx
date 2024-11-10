import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Typography, Button, TextField } from "@mui/material";

export default function EnhancedTable({
  rows,
  headCells,
  rowActions,
  VISIBLE_FIELDS,
  onSort,
  onRowAction,
}) {
  const columns = React.useMemo(() => {
    return headCells
      .filter((headCell) => VISIBLE_FIELDS.includes(headCell.id))
      .map((headCell) => ({
        field: headCell.id,
        headerName: headCell.label,
        align: headCell.numeric ? "right" : "left",
        sortable: true,
        minWidth: 150,
        flex: 1,
        resizable: false,
        renderCell: (params) => params.value,
      }));
  }, [headCells]);

  if (rowActions) {
    columns.push({
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {rowActions.map((ActionButton, idx) => (
            <Button
              key={idx}
              variant="outlined"
              size="small"
              onClick={() => ActionButton.onClick(params.row)}
            >
              {ActionButton.label}
            </Button>
          ))}
        </Box>
      ),
    });
  }

  return (
    <div className="App">
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
            pagination
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            slots={{
              toolbar: GridToolbar,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            onSortModelChange={(model) => {
              if (model.length > 0) {
                const { field, sort } = model[0];
                onSort && onSort(field, sort);
              }
            }}
            sx={{
              padding: "1rem",
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

EnhancedTable.propTypes = {
  rows: PropTypes.array.isRequired,
  headCells: PropTypes.array.isRequired,
  rowActions: PropTypes.array,
  onSort: PropTypes.func,
  onRowAction: PropTypes.func,
};
