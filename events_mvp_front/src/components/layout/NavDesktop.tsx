import { Box, Link, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import NavItem from "../../entities/NavItems";

interface Props {
  isAuthenticated: boolean;
}

const NavDesktop = ({ isAuthenticated }: Props) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map(
        (navItem) =>
          (isAuthenticated || navItem.label !== "Lisa Sündmus") && (
            <Box key={navItem.label}>
              <Link
                as={NavLink}
                to={navItem.to}
                fontWeight={500}
                _activeLink={{ color: "teal.500" }}
                _hover={{ color: "teal.600" }}
              >
                {navItem.label}
              </Link>
            </Box>
          )
      )}
    </Stack>
  );
};

export default NavDesktop;

const NAV_ITEMS: NavItem[] = [
  {
    label: "Sündmused",
    to: "/",
  },
  {
    label: "Lisa Sündmus",
    to: "/lisa",
  },
];
