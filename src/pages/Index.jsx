import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, Heading, useToast } from "@chakra-ui/react";
import { FaCoffee, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // TODO: Implement real login logic
    toast({
      title: "Logged in successfully.",
      description: "You've been logged in!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsLoggedIn(true);
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
            <Button
              leftIcon={<FaMapMarkerAlt />}
              colorScheme="teal"
              m={2}
              onClick={() =>
                toast({
                  title: "Finding Nearest Coffee Place",
                  description: "This feature is not yet implemented.",
                  status: "info",
                  duration: 5000,
                  isClosable: true,
                })
              }
            >
              Find Nearest Coffee Place
            </Button>
            <Button
              leftIcon={<FaCoffee />}
              colorScheme="orange"
              m={2}
              onClick={() =>
                toast({
                  title: "Adding Coffee Place",
                  description: "This feature is not yet implemented.",
                  status: "info",
                  duration: 5000,
                  isClosable: true,
                })
              }
            >
              Add Coffee Place
            </Button>
            <Button
              leftIcon={<FaStar />}
              colorScheme="yellow"
              m={2}
              onClick={() =>
                toast({
                  title: "Adding Review",
                  description: "This feature is not yet implemented.",
                  status: "info",
                  duration: 5000,
                  isClosable: true,
                })
              }
            >
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

export default Index;
