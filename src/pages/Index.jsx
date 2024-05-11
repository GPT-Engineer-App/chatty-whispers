import { Box, Flex, Input, Button, VStack, Text, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height="100vh" overflow="hidden">
      <Box width={isMobile ? "100%" : "30%"} bg="blue.50" p={4}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="xl" fontWeight="bold">Contacts</Text>
          <Button variant="ghost">Alice</Button>
          <Button variant="ghost">Bob</Button>
          <Button variant="ghost">Charlie</Button>
        </VStack>
      </Box>
      <Flex direction="column" flex="1" p={4} bg="gray.50">
        <VStack spacing={4} flex="1" overflowY="auto">
          <Text fontSize="md" alignSelf="flex-start">Alice:</Text>
          <Text fontSize="md" alignSelf="flex-end" bg="blue.100" p={2} borderRadius="lg">Hi there!</Text>
          <Text fontSize="md" alignSelf="flex-start" bg="green.100" p={2} borderRadius="lg">Hello!</Text>
        </VStack>
        <Flex mt="auto" pt={2}>
          <Input placeholder="Type a message" />
          <Button ml={2}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;