import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, useNavigate } from "react-router-dom";
import {
  AccountCircle,
  Facebook,
  GitHub,
  Google,
  KeyRounded,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { useFormik } from "formik";
import { loginValidation } from "../validation/loginValidation";
const Login = () => {
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {email:"henryallen.dev@gmail.com",password:"12345678"},
    validationSchema: loginValidation,
    onSubmit: () => {
      navigate("/");
    },
  });

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        className="blue-gradient"
        container
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={12} md={6}>
          <Typography
            p={2}
            textAlign="center"
            fontFamily="GOOD BRUSH"
            variant="h1"
            color="white"
          >
            Henry Allen
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            bgcolor="rgba(250,250,250,0.9)"
            border="1px solid gray"
            borderRadius={5}
            p={2}
          >
            <Divider>
              <Typography
                p={2}
                variant="h3"
                color="primary"
                fontWeight="bolder"
              >
                Login
              </Typography>
            </Divider>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              sx={{ m: 1 }}
              variant="outlined"
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type={isPasswordHidden ? "password" : ""}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyRounded />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => {
                        setIsPasswordHidden((prev) => !prev);
                      }}
                      color="inherit"
                      variant="text"
                    >
                      {isPasswordHidden ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                ),
              }}
              sx={{ m: 1 }}
              variant="outlined"
            />
            <Box px={2} display="flex" justifyContent="space-between">
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Link to="/">Forget Password?</Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              sx={{ m: 1 }}
              variant="contained"
              size="large"
            >
              Login
            </Button>
            <Divider color="primary">Or</Divider>
            <Box display="flex" justifyContent="space-around">
              <Button color="primary" size="large">
                <Google fontSize="large" />
              </Button>
              <Button color="primary" size="large">
                <Facebook fontSize="large" />
              </Button>
              <Button color="primary" size="large">
                <Twitter fontSize="large" />
              </Button>
              <Button color="primary" size="large">
                <GitHub fontSize="large" />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
export default Login;
