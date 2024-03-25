import styles from './Loader.module.css';
import { Box, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box role="alert">
      <Spinner className={styles.circle} />
    </Box>
  );
};

export default Loader;
