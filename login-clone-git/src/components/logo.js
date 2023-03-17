import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export function Logo() {
    return (
        <Flex w={'full'} alignItems={"center"} flexDirection={'column'} justifyContent={'center'} alignSelf={'center'} >
            <Icon boxSize={55} as={FaGithub} />
            <Text fontSize={'2xl'} mt={8} mb={-16}>Sing in to GitHub</Text>
        </Flex>
    )
}