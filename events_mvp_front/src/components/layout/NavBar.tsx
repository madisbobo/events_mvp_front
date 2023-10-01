import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import NavDesktop from "./NavDesktop";

const NavBar = () => {
  return (
    <Box>
      <Flex
        color={"gray.600"}
        minH={"60px"}
        py={2}
        px={5}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex flex={1} justify="center">
          <Flex display={"flex"} ml={10}>
            <NavDesktop />
          </Flex>
        </Flex>

        <Stack justify={"flex-end"} direction={"row"}>
          <Link
            as={NavLink}
            to={"/login"}
            _activeLink={{ color: "teal.500" }}
            _hover={{ color: "teal.600" }}
          >
            Logi Sisse
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
