import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { logoutAuth, isAuthenticated } = useAuth();

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
            <NavDesktop isAuthenticated={isAuthenticated} />
          </Flex>
        </Flex>

        <Stack justify={"flex-end"} direction={"row"}>
          {!isAuthenticated ? (
            <Link
              as={NavLink}
              to={"/login"}
              _activeLink={{ color: "teal.500" }}
              _hover={{ color: "teal.600" }}
            >
              Logi sisse
            </Link>
          ) : (
            <Link
              as={NavLink}
              onClick={() => logoutAuth()}
              to={"/"}
              _activeLink={{ color: "teal.500" }}
              _hover={{ color: "teal.600" }}
            >
              Logi välja
            </Link>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
