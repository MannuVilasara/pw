import React, { useState } from "react";
import axios from "axios";

function form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { fullname, email, phone, gender, address } = formData;
    if (!fullname || !email || !phone || !gender || !address) {
      console.error("All fields are required");
      return;
    }
    const res = await axios.post("/api/send-data", {
      fullname,
      email,
      phone,
      gender,
      address,
    });
    if (res.status === 200) {
      // Handle successful form submission
      console.log("User created successfully");
    } else {
      // Handle errors
      console.error("Failed to create user:", res.data.error);
    }
  };
  return <div>form</div>;
}

export default form;
