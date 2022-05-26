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

const LoginForm = (props) => {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters"),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
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
      {isSubmitting && <LinearProgress color="error" />}
      <div className={classes.avatar}>
        <img src={logo} className={classes.img} alt="" />
      </div>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.form}>
        <InputField name="identifier" label="Email" form={form} />

        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={`btn-login ${classes.submit}`}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
