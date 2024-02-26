'use client'
import React, { useState, createContext, useContext } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
// import Link from "next/link"
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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


interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface UserContextType {
  userData: User | null;
}

const UserContext = createContext<UserContextType>({ userData: null });
const defaultTheme = createTheme();
function Login() {
  const cookies = new Cookies();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [pass, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<User | null>(null);

  const notifySuccess = () => toast.success("Login successful");
  const notifyError = () => toast.error("Incorrect email or password");

  const login = () => {
    axios.post<{ token: string }>("http://localhost:3001/user/login",{ email:email, pwd: pass })
      .then((res) => {
        console.log("logged in", res);
        const decoded = jwtDecode(res.data.token) as { role: string; id: string; firstName: string; lastName: string };
        cookies.set("token", res.data.token);
        if (decoded.role === "Seller") {
          // Set user data to context
          setUserData({
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
          });
          router.push("/saler");
          notifySuccess();
        } else if (decoded.role === "Admin") {
          setUserData({
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
          });
          router.push("/Profileadmin");
          notifySuccess();
        } else if (decoded.role === "Client") {
          setUserData({
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
          });
          router.push("/Client");
          notifySuccess();
         }
        })
        .catch((error) => {
        console.log(error);
        notifyError();
      });
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
              Sign in
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="sara@xyz.com"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                placeholder="••••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
               
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#f44336', borderRadius:8, ":hover" : { backgroundColor: "#000000" } }}
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{color:"#000000"}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./SignUp" variant="body2" sx={{color:"#000000"}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <ToastContainer />

            </Box>
          </Box>
        </Grid>
      </Grid>

    </ThemeProvider>
   


    
  );
}

export default Login;
