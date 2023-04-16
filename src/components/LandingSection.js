import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const name='pete'
const avatarURL = 'https://i.pravatar.cc/150?img=7'

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
        <Avatar name={name} src={avatarURL} size='50px' className='hover:outline hover:outline-blue-600 hover:outline-4' />
        <span className='text-[16px]'>{greeting}</span>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
