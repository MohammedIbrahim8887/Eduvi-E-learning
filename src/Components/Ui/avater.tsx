import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  Link  from './link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface avaterProps{
  name:string
  img:string
}


export default function avater({name,img}:avaterProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='flex  text-center '>
      {name?(<span>{name}</span>):("My Account")}
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
      <div className='flex'> <span className='ml-3  relative bottom-5 mt-3 hover:shadow-lg cursor-pointer '  >
      <AccountCircleIcon  sx={{fontSize:40}}/>
      
        {/* {img?(<img className='w-5 h-5 rounded-full' src="img" alt="s" />):(<AccountCircleIcon />)} */}
       </span></div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>cetagory</Typography>
        <Typography sx={{ p: 2 }}><Link  url='#' text='change your password' /></Typography>
      </Popover>
    </div>
  );
}

