import React from 'react';
import Box from '@mui/material/Box';

const AddedReservation = () => {
  // const { session } = useContext(Context);

  return (<h1 className="content">
    <Box mt={20} sx={{ p: 2}} >
    
      Thank you, your reservation has been added to the queue for approval!
    </Box></h1>
  )
}

export default AddedReservation;