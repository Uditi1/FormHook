import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.table(data)
    localStorage.setItem("formdata",JSON.stringify(data))
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>User Register Form</h5>
          <p>message</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <div className="mb">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                  />
                  <span>
                    {errors.name?.type === "required" && "Name is Required"}
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                  <label className="form-label">UserName</label>
                  <input
                    type="text"
                    {...register("username", { required: true })}
                  />
                  <span>
                    {errors.username?.type === "required" &&
                      "Username is Required"}
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    })}
                  />
                  <span>
                    {errors.email?.type === "required" && "Email is Required"}
                    {errors.email?.type === "pattern" && "Enter Valid Email"}
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                    })}
                  />
                  <span>
                    {errors.password?.type === "required" &&
                      "Password is required"}
                    {errors.password?.type === "minLength" &&
                      "Enter Password is less than 6 digit"}
                    {errors.password?.type === "maxLength" &&
                      "Enter Password is more than 10 digit"}
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                  <label className="form-label">Phone No</label>
                  <input
                    type="number"
                    {...register("phoneno", {
                      required: true,
                      minLength: 10,
                      maxLength: 12,
                    })}
                  />
                  <span>
                    {errors.phoneno?.type === "required" &&
                      "PhoneNo is required"}
                    {errors.phoneno?.type === "minLength" &&
                      "Enter PhoneNo is less than 10 digit"}
                    {errors.phoneno?.type === "maxLength" &&
                      "Enter PhoneNo is more than 12 digit"}
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                  <label className="form-label">Gender</label>
                  <select
                    name="gender"
                    {...register("gender", { required: true })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span>
                    {errors.gender?.type === "required" && "Gender is Required"}
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
