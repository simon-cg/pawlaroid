import React from'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    
    const { docs } = useFirestore('images');
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}s
                key={doc.id}
                onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url}
                        alt="upload relating to their dog"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}    
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )

}

export default ImageGrid;