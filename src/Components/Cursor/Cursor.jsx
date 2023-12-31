import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import './cursor.scss';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const moveMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", moveMouse);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
        }
    }, [])

    return (
        <motion.div className='cursor' animate={{ x: position.x, y: position.y }}>

        </motion.div>
    )
}
