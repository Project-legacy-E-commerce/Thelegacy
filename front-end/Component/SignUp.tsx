"use client"
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MinHeader from "../Ccomponents/MinHeader";
// import NavbarUser from "../Ccomponents/NavbarUser";
import axios from "axios";
// import Link from "next/link"
import loginImage from "@/images/image.png";
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors, useColorScheme } from "@mui/material";


interface SignUpFormData {
  firstname:string,
  lastname:string,
  email:string,
  role:string,
  phone:string,
  adress:string,
  pwd:string
}
const defaultTheme = createTheme();

export default function SignUp() {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [adress, setAdr ]= useState<string>("") ;
  const [number, setNumber] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleCreate =  () => {
    const formData: SignUpFormData = {
      firstname:firstname,
      lastname:lastname,
      email:email,
      role:role,
      phone:number,
      adress:adress,
      pwd:password
    };
    console.log(formData,"thisFormData");
     axios.post("http://localhost:3001/user/signup", formData)
     .then(()=>{
      console.log("done");
     })
     .catch((err)=>console.error(err));
    }
  
        // Handle error, show error message to the user
  
  

  const handleRoleChange = (selectedRole: string) => {
    setRole(selectedRole);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.oakyweb.com/images/ecom1.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#f44336' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Your Account 
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1,}}>
              <TextField
              sx={ {ml:8}}
                margin="normal"
                required
                
                id="FirstName"
                label="FirstName "
                name="FirstName"
                autoComplete="FirstName"
                autoFocus
                onChange={(e) => {setFirstName(e.target.value) }}
              />
              <TextField
              sx={ {ml:10}}
                margin="normal"
                required
                
                name="LastName"
                label="LastName"
                type="LastName"
                id="LastName"
                autoComplete="current-password"
                onChange={(e) => {setLastName(e.target.value);}}
              />
              <TextField
              sx={ {ml:8}}
                margin="normal"
                required
                
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <TextField
                            sx={ {ml:10}}

                margin="normal"
                required
                
                id="Phone"
                label="Number "
                name="Phone"
                autoComplete="Number"
                autoFocus
                onChange={(e) => {setNumber(e.target.value)}}            
                  />
              <TextField
              sx={ {ml:8}}
                margin="normal"
                required
                
                id="password"
                label="password "
                name="password"
                type="password"
                autoComplete="password"
                autoFocus
                onChange={(e) => {setPassword(e.target.value) }}         
                     />
              <TextField
                            sx={ {ml:10}}

                margin="normal"
                required
                
                id="Adress"
                label="Adress "
                name="Adress"
                autoComplete="Adress"
                autoFocus
                onChange={(e) => { setAdr(e.target.value) }}         
                    />
              
               <FormControlLabel
                control={<Checkbox value="remember" color="primary"
                checked={role === "Client"}
                onChange={() => handleRoleChange("Client")}/>}
                label="Client"
                sx={{display:"flex" }}
              />
               <FormControlLabel 
                control={<Checkbox  value="remember" color="primary"
                checked={role === "Seller"}
                       onChange={() => handleRoleChange("Seller")} />}
                label="Seller" 
               
                /> 
                
              
              <Button
               
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#f44336', borderRadius:8  }}
                onClick={handleCreate}
                href="/Login"
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{color:"#000000"}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./Login" variant="body2" sx={{color:"#000000"}}>
                    {"Do you Have Account ? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    // <div>
    
    //   <br />
    //   <br />
    //   <br />
    //   <section className="bg-white">
    //     <img
    //       src={loginImage.src}
    //       alt="logo"
    //       style={{ height: 550, width: 700, marginLeft: 100 }}
    //     />

    //     <div
    //       className="flex flex-col items-center py-8 mx-auto md:h-screen lg:py-0"
    //       style={{ paddingLeft: 580, marginTop: -575 }}
    //     >
    //       <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"></span>
    //       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //             Create an account
    //           </h1>
    //           <div className="space-y-4 md:space-y-6">
    //             {/* Your input fields */}
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 First name
    //               </label>
    //               <input
    //                 type="text"
    //                 name="text"
    //                 id="text"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 onChange={(e) => {
    //                   setFirstName(e.target.value);
    //                 }}
    //               />
    //             </div>
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Last name
    //               </label>
    //               <input
    //                 type="text"
    //                 name="text"
    //                 id="text"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 onChange={(e) => {
    //                   setLastName(e.target.value);
    //                 }}
    //               />
    //               addr
    //                <input
    //                 type="text"
    //                 name="text"
    //                 id="text"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 onChange={(e) => {
    //                   setAdr(e.target.value);
    //                 }}
    //               />
    //             </div>
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 E-mail
    //               </label>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 placeholder="name@company.com"
    //                 onChange={(e) => {
    //                   setEmail(e.target.value);
    //                 }}
    //               />
    //             </div>
    //             <div>
    //               <label
    //                 htmlFor="password"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 type="password"
    //                 name="password"
    //                 id="password"
    //                 ••••••••
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 onChange={(e) => {
    //                   setPassword(e.target.value);
    //                 }}
    //               />
    //             </div>
    //             <div>
    //               <label
    //                 htmlFor="number"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Phone number
    //               </label>
    //               <input
    //                 type="number"
    //                 name="email"
    //                 id="email"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 placeholder="88 888 888"
    //                 onChange={(e) => {
    //                   setNumber(e.target.value);
    //                 }}
    //               />
    //             </div>


    //             {/* Role selection */}
    //             <div className="flex items-center space-x-8">
    //               <div className="flex items-center">
    //                 <input
    //                   type="radio"
    //                   id="seller"
    //                   name="role"
    //                   value="Seller"
    //                   checked={role === "Seller"}
    //                   onChange={() => handleRoleChange("Seller")}
    //                 />
    //                 <label htmlFor="seller">Seller</label>
    //               </div>
    //               <div className="flex items-center">
    //                 <input
    //                   type="radio"
    //                   id="client"
    //                   name="role"
    //                   value="Client"
    //                   checked={role === "Client"}
    //                   onChange={() => handleRoleChange("Client")}
    //                 />
    //                 <label htmlFor="client">Client</label>
    //               </div>
    //             </div>

    //             {/* Terms acceptance */}
    //             <div className="flex items-start">
    //               <input
    //                 id="terms"
    //                 type="checkbox"
    //                 checked={termsAccepted}
    //                 onChange={() => setTermsAccepted(!termsAccepted)}
    //               />
    //               <label htmlFor="terms" className="ml-2">
    //                 I accept the{" "}
    //                 <a href="#" className="text-primary-600 hover:underline">
    //                   Terms and Conditions
    //                 </a>
    //               </label>
    //             </div>

    //             {/* Button for account creation */}
    //             <button
    //               type="button"
    //               className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    //               onClick={handleCreate}
    //             >
    //               Create an account
    //             </button>

    //             {/* Login link */}
    //             <p className="text-sm font-light text-gray-500">
    //               Already have an account?{" "}
    //               <Link href="/Login" className="text-primary-600 hover:underline">
    //                 Login here
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
