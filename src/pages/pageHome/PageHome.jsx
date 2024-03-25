import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { Box, Text, VStack } from '@chakra-ui/react';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box>
      <VStack spacing={4}>
        <Box as="h1" fontSize="2xl" fontWeight="semibold">
          Welcome 👋
        </Box>
        <Box as="h2" fontSize="lg">
          Now you will exactly not forget your contacts!
        </Box>
        {!isLoggedIn && (
          <Text>
            Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </Text>
        )}
      </VStack>
    </Box>
  );
}

export default PageHome;
