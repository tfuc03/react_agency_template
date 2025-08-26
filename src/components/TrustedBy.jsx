import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 👈 nằm ở đây
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const TrustedBy = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'
    >
      <motion.h3 
        variants={item}
        className='font-semibold'
      >
        Trusted by Leading Companies
      </motion.h3>

      <motion.div 
        variants={container}
        className='flex items-center justify-center flex-wrap gap-10 m-4'
      >
        {company_logos.map((logo, index)=> (
          <motion.img 
            key={index}
            src={logo}
            alt="" 
            variants={item}
            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl'
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default TrustedBy
