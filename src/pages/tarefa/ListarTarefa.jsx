import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

const initialRows = [
  { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição 1', inicio: '2022-01-01', fim: '2022-01-02', status: 'Concluída', recurso: 'Recurso 1' },
  { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição 2', inicio: '2022-01-03', fim: '2022-01-04', status: 'Em Andamento', recurso: 'Recurso 2' },
];

const ListarTarefa = () => {
  const [rows, setRows] = useState(initialRows);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openCriar, setOpenCriar] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);

  const handleOpenCriar = () => setOpenCriar(true);
  const handleCloseCriar = () => setOpenCriar(false);

  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleEdit = (id) => {
    const rowToEdit = rows.find((row) => row.id === id);
    setSelectedRow(rowToEdit);
    handleOpenEditar();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'titulo', headerName: 'Título', width: 150 },
    { field: 'descricao', headerName: 'Descrição', width: 200 },
    { field: 'inicio', headerName: 'Início', width: 130 },
    { field: 'fim', headerName: 'Fim', width: 130 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'recurso', headerName: 'Recurso', width: 150 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row.id)}
            style={{ marginRight: 8 }}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Excluir
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Button variant="contained" onClick={handleOpenCriar} sx={{ marginBottom: 2 }}>
        Criar Nova Tarefa
      </Button>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />

      <Modal open={openCriar} onClose={handleCloseCriar}>
        <Box sx={{ p: 4, bgcolor: 'white', mx: 'auto', my: '20%', width: 400 }}>
          <CriarTarefa handleClose={handleCloseCriar} setRows={setRows} />
        </Box>
      </Modal>

      <Modal open={openEditar} onClose={handleCloseEditar}>
        <Box sx={{ p: 4, bgcolor: 'white', mx: 'auto', my: '20%', width: 400 }}>
          <EditarTarefa
            handleClose={handleCloseEditar}
            selectedRow={selectedRow}
            setRows={setRows}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ListarTarefa;
