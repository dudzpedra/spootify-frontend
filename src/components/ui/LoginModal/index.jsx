import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import './styles.sass'
import ContactForm from '../../ContactForm';

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color='secondary'>First time here?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal-container'>
          <Button onClick={handleClose} className='modal-close-btn'>
            <CloseIcon color='action' />
          </Button>
          <ContactForm />
        </Box>
      </Modal>
    </div>
  )
}

export default LoginModal
