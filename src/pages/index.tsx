import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Center,
  Heading,
  Highlight,
  List,
  ListItem,
  Text,
  useColorMode,
  Code,
  Button,
  calc,
  CodeProps,
  Link as ChakraLink,
  Divider,
  Flex,
} from "@chakra-ui/react";

const $lineHeight = "1.4375rem";

const PurpleCode = (props: CodeProps) => (
  <Code colorScheme="purple" {...props} />
);

const IndexPage: React.FC<PageProps> = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box as="main">
      <Center height="100vh" textAlign="center">
        <Flex gap={$lineHeight} flexDir="column">
          <Heading
            as="h1"
            size="4xl"
            maxW="16ch"
            lineHeight={calc($lineHeight).multiply(4).toString()}
          >
            <Highlight
              query="With Speed"
              styles={{ color: "purple.600", _dark: { color: "purple.400" } }}
            >
              Get Started Using Gatsby With Speed
            </Highlight>
          </Heading>
          <Text fontSize="2xl" mb={$lineHeight}>
            Thank you for using the Gatsby Starter for{" "}
            <PurpleCode fontSize="initial">Chakra UI</PurpleCode>!
          </Text>
          <List textAlign="start" spacing={4}>
            <ListItem>
              ⚡Create accessible Gatsby apps with speed using Chakra UI
            </ListItem>
            <ListItem>
              ⚡Generate types from your custom component with the Chakra CLI
              for IDE autocompletion
            </ListItem>
          </List>
          <Text>
            To generate the theming token types, run{" "}
            <PurpleCode>npm run theme</PurpleCode> or{" "}
            <PurpleCode>npm run theme:watch</PurpleCode>
          </Text>
          <Text>
            Head over to{" "}
            <ChakraLink
              href="https://chakra-ui.com"
              color="blue.500"
              fontWeight="bold"
            >
              ChakraUI.com
            </ChakraLink>{" "}
            to get started using the components and creating your theme!
          </Text>
          <Divider />
          <Button
            onClick={toggleColorMode}
            colorScheme="blue"
            alignSelf="center"
          >
            Toggle Color Mode
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
