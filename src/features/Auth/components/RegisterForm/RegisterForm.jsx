import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/forms-controls/InputField/InputField";
import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "components/button/Button";
import { makeStyles } from "@mui/styles";
import PasswordField from "components/forms-controls/PasswordField/PasswordField";
import logo from "../../../../assets/tmovie.png";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "13px",
    position: "relative",
  },

  avatar: {
    textAlign: "center",
  },

  img: {
    width: "70px",
  },

  title: {
    margin: "1px 0 4px 0",
    textAlign: "center",
  },

  submit: {
    marginTop: "15px",
    marginBottom: "8px",
  },

  progress: {
    position: "absolute",
    margin: "8px",
  },
}));

const RegisterForm = (props) => {
  const classes = useStyles();

  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your full name"),
    lastName: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters"),
    retypePassword: yup
      .string()
      .required("Please enter retype password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && (
        <LinearProgress className={classes.progress} color="error" />
      )}
      <div className={classes.avatar}>
        <img src={logo} className={classes.img} alt="" />
      </div>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign Up
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.form}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "48%" }}>
            <InputField name="firstName" label="First Name" form={form} />
          </div>
          <div style={{ width: "48%" }}>
            <InputField name="lastName" label="Last Name" form={form} />
          </div>
        </Box>

        <InputField name="email" label="Email" form={form} />

        <PasswordField name="password" label="Password" form={form} />

        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={`btn-fullwidth ${classes.submit}`}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
