import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { WrapRootElementBrowserArgs } from "gatsby";
import { customTheme } from "./theme";
export const WrapRootElement = ({ element }: Pick<WrapRootElementBrowserArgs, 'element'>) => (
    // Or ChakraBaseProvider if you only want to compile the default Chakra theme tokens
    <ChakraProvider theme={customTheme}>
        {element}
    </ChakraProvider>
)