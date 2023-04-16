import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    // <Grid
    //   templateColumns={{ base: "1fr", md: "1fr 1fr" }}
    //   templateRows={{ base: "1fr 1fr", md: "1fr" }}
    //   gap={{ base: 4, md: 8 }}
    // >
    //   <GridItem>
    //     // Content for the first cell
    //   </GridItem>
    //   <GridItem>
    //     // Content for the second cell
    //   </GridItem>
    //   <GridItem>
    //     // Content for the third cell
    //   </GridItem>
    //   <GridItem>
    //     // Content for the fourth cell
    //   </GridItem>
    // </Grid>

//     <VStack spacing="4" align="stretch">
//     <HStack spacing="4" justify="space-between">
//       <Box className='w-full h-full'>
//            <img src={IMG1} className='w-full h-full'/>
//         </Box>
//         <Box h="40" w="40" bg="gray.100">
//            <img src={IMG2} className='w-full h-full'/>
//         </Box>
//     </HStack>
//     <HStack spacing="4" justify="space-between">
//     <Box h="40" w="40" bg="gray.100">
//            <img src={IMG3} className='w-full h-full'/>
//         </Box>
//         <Box h="40" w="40" bg="gray.100">
//            <img src={IMG4} className='w-full h-full'/>
//         </Box>
//     </HStack>
//   </VStack>

<div className="w-full p-4">
<div className="bg-white rounded-lg overflow-hidden shadow-lg">
  <img src={imageSrc} alt={title} className="w-full h-[350px] object-cover" />
  <div className="p-4">
    <h2 className="text-lg text-black">
        <span className='font-bold'>
            {title}
        </span>
        <p className='mt-[16px]'>
            {description}
        </p>
    </h2>
    
    <div className='flex flex-row text-black items-center space-x-[16px] mt-[50px]'>
        <FontAwesomeIcon icon={faArrowRight} size='2x'/>
        <span>Read more</span>
    </div>
  </div>
</div>
</div>

  
  );
};

export default Card;
