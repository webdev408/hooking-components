import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
  return (
    <div className="container my-5">
    <h1 className='my-3'>Contact Us Virtually Anytime!📫</h1>
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <FormGroup>
        <Label>Name</Label>
        <Input name="name" innerRef={register(registerOptions.name)} />
        <small className="text-danger">
          {errors.name && errors.name.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          innerRef={register(registerOptions.email)}
        />
        <small className="text-danger">
          {errors.email && errors.email.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          innerRef={register(registerOptions.password)}
        />
        <small className="text-danger">
          {errors.password && errors.password.message}
        </small>
      </FormGroup><br/>
      <Button color='success'>Submit</Button>
    </Form>
    </div>
  );
};
export default RegisterForm;
