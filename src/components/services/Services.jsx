import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
//   const ref = useRef()

//   const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate="animate"
      whileInView='animate'
      //   ref={ref}
      //   animate={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/cardano-blockchain-platform.jpg' alt='coin' />
          <h1>
            <motion.b whileHover={{ color: 'cyan' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileH over={{ color: 'cyan' }}>
              For Your
            </motion.b>{' '}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Cryptocurrency's rise, birthed by Bitcoin's creator, Satoshi
            Nakamoto, reshapes finance. Blockchain's security and
            decentralization redefine transactions. Smart contracts, NFTs, and
            crypto's integration intrigue. Your key interest in this realm?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Games and more!</h2>
          <p>
            Crypto's evolution is captivating. From Bitcoin's inception by
            Satoshi Nakamoto to diverse altcoins, it reshapes finance.
            Blockchain secures and decentralizes, impacting smart contracts,
            NFTs, and finance's future. Your focus in crypto?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Why now?</h2>
          <p>
            The crypto realm, birthed by Bitcoin's enigmatic creator, Satoshi
            Nakamoto, reshapes finance. Blockchain's security and
            decentralization redefine transactions. Smart contracts, NFTs, and
            crypto's integration are captivating. What aspect captivates you
            most in this landscape?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>What makes it</h2>
          <p>
            Cryptocurrency's birth through Bitcoin by Satoshi Nakamoto
            transforms finance. Blockchain secures, decentralizes, reshaping
            transactions. Smart contracts, NFTs, and integration fascinate. What
            captivates you in this domain?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
