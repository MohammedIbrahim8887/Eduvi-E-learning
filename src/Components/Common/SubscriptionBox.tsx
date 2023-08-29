import React from 'react';
import {useForm,SubmitHandler} from 'react-hook-form';

type FormValues = {
  email:string;
}

const SubscriptionBox: React.FC = () => {

    const {register,handleSubmit, formState: {errors}} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
   
  
  return (
    <div className="w-full max-w-3xl mx-auto px-8 lg:px-16 my-8 h-80  bg-[#0A033C]
     text-white rounded-lg flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-4xl max-w-prose font-bold leading-14  ">
          Subscribe to get updates
          <br />
          every new course
        </p>
      </div>
      <div className="text-center mt-4">
      <p className="font-light text-sm leading-6 text-white opacity-40 max-w-prose mx-auto  tracking-tighter">
          20k+ students daily learn with Eduvi, subscribe for new courses.
        </p>
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-center mt-8">
          <input type="email"
            {...register("email", {required: "Email is required"})}
            className="w-full sm:w-auto h-10 px-4 py-2 rounded-l-lg rounded-bl-lg 
            mb-2 sm:mb-0  placeholder:text-black-400 placeholder:italic 
            bg-white bg-opacity-10 focus:bg-opacity-20 duration-150"
            placeholder="enter your email"
             />
            {errors.email && <p className="text-red-500">{errors.email.message}</p> }

            <button 
              type="submit" 
              className="bg-blue-500 p-2 rounded hover:bg-blue-600">
              Subscribe
            </button>
        </div>

      </form>
    </div>
  );
};

export default SubscriptionBox;

{/* <form action="" method="post">
      <div className="flex flex-row justify-center mt-8">

        <input
          type="email"
          placeholder="enter your email"
          className="w-full sm:w-auto h-10 px-4 py-2 rounded-l-lg rounded-bl-lg 
           mb-2 sm:mb-0  placeholder:text-black-400 placeholder:italic 
           bg-white bg-opacity-10 focus:bg-opacity-20 duration-150"/>
          
          
         
          
         
         
        
        <button className="w-full text-small px-4 sm:w-auto h-10 bg-indigo-700 text-white rounded-r-lg rounded-br-lg" >
          Subscribe
        </button>
      </div>
      </form> */}












