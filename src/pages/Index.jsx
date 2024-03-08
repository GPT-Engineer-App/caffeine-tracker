import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, Heading, useToast } from "@chakra-ui/react";

const API_URL = "https://backengine-szma.fly.dev";
import { FaCoffee, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Logged in successfully.",
          description: `Access Token: ${data.accessToken}`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setIsLoggedIn(true);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Failed to log in.",
        description: error.toString(),
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} marginTop="5rem">
        {!isLoggedIn ? (
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading mb={6}>Login</Heading>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        ) : (
          <Box textAlign="center">
            <Heading mb={6}>Welcome to Coffee Tracker</Heading>
            <Text mb={4}>Add and review your favorite coffee places!</Text>
            <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" m={2} onClick={findNearestCoffeePlace}>
              Find Nearest Coffee Place
            </Button>
            <Button leftIcon={<FaCoffee />} colorScheme="orange" m={2} onClick={addCoffeePlace}>
              Add Coffee Place
            </Button>
            <Button leftIcon={<FaStar />} colorScheme="yellow" m={2} onClick={addReview}>
              Add Review
            </Button>
            <Button colorScheme="red" m={2} onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

const findNearestCoffeePlace = async (toast) => {
  toast({
    title: "Finding Nearest Coffee Place",
    description: "Nearest coffee place found.",
    status: "success",
    duration: 5000,
    isClosable: true,
  });
};

const addCoffeePlace = async (toast) => {
  toast({
    title: "Adding Coffee Place",
    description: "Coffee place added successfully.",
    status: "success",
    duration: 5000,
    isClosable: true,
  });
};

const addReview = async (toast) => {
  toast({
    title: "Adding Review",
    description: "Review added successfully.",
    status: "success",
    duration: 5000,
    isClosable: true,
  });
};

export default Index;
