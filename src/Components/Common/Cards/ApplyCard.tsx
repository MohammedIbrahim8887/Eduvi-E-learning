import {Typography, CardContent, Card, CardActions } from '@mui/material';
import ApplyButton from '../../Buttons/ApplyButton';




const ApplyCard = () =>{

  return(
    <div className='p-3 m-auto'>
    <Card className="m-auto lg:flex lg:flex-row lg:justify-around lg:p-3 shadow-lg lg:w-Apply-width shadow-slate-300" sx={{backgroundColor:"rgba(183, 241, 214, 0.39)", boxShadow:"0 5px 7px 12px rgba(0,0,0,0.25)", borderRadius:"20px", height:'218px'}}>
        <CardContent >
            <Typography component="div"  sx={{fontSize:"32px",width:"700px",}} className='text-red'>
              Current internship is availiable in front-end, Back-end mobile and Graphics Designer.If you are interseted, hit the green button now!
            </Typography>
        </CardContent>
        <CardActions sx={{marginTop:"50px"}}>
            <ApplyButton text='Apply' />
        </CardActions>
    </Card>
    </div>
  )
  
}

export default ApplyCard;