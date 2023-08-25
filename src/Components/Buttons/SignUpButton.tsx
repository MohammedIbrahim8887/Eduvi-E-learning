import React from 'react';
import { Button } from '@mui/material';

const SignUpBtton: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <div>
      <Button onClick={onClick} className="rounded-r-lg text-white px-28 py-3  bg-purple-600 hover:bg-purple-700 shadow-md  ">
    {text}
  </Button>
    </div>
  )
}

export default SignUpBtton
