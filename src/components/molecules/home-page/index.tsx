import { Box, Stack } from "@chakra-ui/react";
import { Logo } from "../logo";
export const HomePage = () => {
  return (
    <Stack
      alignItems={"center"}
      w="full"
      bgColor={"#1A181B"}
      color={"white"}
      h={"100dvh"}
      justifyContent={"space-between"}
      p={8}
      overflow={"hidden"}
      pos={"relative"}
    >
      <Box
        bgColor={"#09DDFA"}
        w={"300px"}
        h={"300px"}
        rounded={"full"}
        filter={"blur(100px)"}
        top={0}
        left={0}
        pos={"absolute"}
      />
      <Box
        bgColor={"#FF35B8"}
        w={"300px"}
        h={"300px"}
        rounded={"full"}
        filter={"blur(100px)"}
        bottom={0}
        right={"-20%"}
        pos={"absolute"}
      />
      <Box zIndex={10}>
        <Logo />
      </Box>
    </Stack>
  );
};
