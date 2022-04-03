import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

const AddPostFloat = () => {
  return (
    <Fab sx={{
        position: 'sticky',
        bottom: '0',
        top: '5',
        marginLeft: '1em',
    }} color="primary" aria-label="add">
          <AddIcon />
    </Fab>
  )
}

export default AddPostFloat