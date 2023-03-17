import { Box, Button, FormControl, FormLabel, Input, Link,  VStack } from "@chakra-ui/react";


export function Login() {
    return (
        <Box  borderRadius={12} w={["full", 'md']} p={['8', '10']} mt={['20', '10vh']} mx={'auto'} border={['none', '1px']} borderColor={['none', 'gray.400']}>
            <VStack spacing={'4'} align={'flex-start'} w={'full'}>
                {/* <VStack spacing={'1'} align={['flex-start', 'center']} w={'full'} mb={'3'}>
                    <Heading>Login</Heading>
                    <Text>Enter your e-mail and password to login</Text>
                </VStack> */}

                <FormControl>
                    <FormLabel>E-mail Adress</FormLabel>
                    <Input rounded={'none'} variant={'filled'} />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded={'none'} variant={'filled'} type={'password'} />
                </FormControl>
                    {/* <Checkbox>Remember me</Checkbox> */}
                   <Button variant={"link"} colorScheme={'facebook'}> Forgot Password?</Button>
                <Button rounded={'none'} bg={'green.600'} color={'white'} w={['full']} alignSelf={'end'} pt={6} pb={6}>
                    <Link href='https://github.com/' isExternal>
                        Sign in
                    </Link>
                </Button>
            </VStack>
        </Box>
    )
}