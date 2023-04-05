
import Veggie from '../components/Veggie';
import Popular from '../components/Popular';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div 
        className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
            >
            <Veggie />
            <Popular />
        </motion.div>
    )
}

export default Home