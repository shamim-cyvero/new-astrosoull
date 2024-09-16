import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AdminCreateCourse } from "../../../redux/action/CourseActions";

function AddCourse() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); 
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [banner, setBanner] = useState("");

  const {  loading, course } = useSelector(
		state => state.courseContainer
	);

  const id=course?._id


  const navigate=useNavigate()
  const dispatch=useDispatch()

  const CourseBannerHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBanner(reader.result);
      }
    };
  };

  const formSubmit =async (e) => {
    e.preventDefault();
    await dispatch(AdminCreateCourse(name, description, price, banner ,category))

    navigate(`/admin/course/addcourse/newcourse`);
    

  };
  return (
    <>
      <AdminHeader />
      <Grid
        w={"100%"}
        height={"100vh"}
        bgColor={"rgb(247, 247, 247)"}
        gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
        gap={"2rem"}
      >
        <AdminSideBar />
        <Box overflowY={"auto"} p={3}>
          <Heading
            children={"Add new course"}
            size={"lg"}
            m={5}
            textAlign={"center"}
            textTransform={"uppercase"}
          />

          <form style={{ width: "80%" }} onSubmit={formSubmit}>
            <FormControl mb={5}>
              <FormLabel fontSize={"lg"}>Name</FormLabel>
              <Input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel fontSize={"lg"}>Description</FormLabel>
              <Textarea
                rows={4}
                cols={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel fontSize={"lg"}>Price</FormLabel>
              <Input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel fontSize={"lg"}>Category</FormLabel>
              <Input
                type="text"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel fontSize={"lg"}>Banner</FormLabel>
              <Input
                id="img"
                name="img"
                accept="image/*"
                type="file"
                onChange={CourseBannerHandler}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="whatsapp"
              size={"sm"}
              p={2}
              w={["100%", "50%", "20%"]}
              fontSize={"md"}
              isLoading={loading}
            >
              Create Now
            </Button>
          </form>
        </Box>
      </Grid>
    </>
  );
}

export default AddCourse;
