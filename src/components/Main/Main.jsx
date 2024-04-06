import React from 'react'
import dividerMobile from '/images/pattern-divider-mobile.svg'
import dividerDesk from '/images/pattern-divider-desktop.svg'
import dice from '/images/icon-dice.svg'
import { motion } from 'framer-motion'

export default function Main() {
	const [advice, setAdvice] = React.useState({
		id: 117,
		advice:
			"It is easy to sit up and take notice, what's difficult is getting up and taking action.",
	})
	const [loading, setLoading] = React.useState(false)

	// Initial advice (the design one) when loading
	// React.useEffect(() => {
	// 	fetch('https://api.adviceslip.com/advice/117')
	// 		.then(res => res.json())
	// 		.then(data => setAdvice(data.slip))
	// }, [])

	// Random advice on click
	const handleClick = () => {
		setLoading(true)
		fetch('https://api.adviceslip.com/advice')
			.then(res => res.json())
			.then(data => {
				setTimeout(() => {
					setLoading(false)
					setAdvice(data.slip)
				}, 1000)
			})
	}

	// Dice animation on click
	const diceVariants = {
		initial: {
			rotate: 0,
		},
		rotate: {
			rotate: '360deg',
			transition: { type: 'spring' },
		},
	}

	return (
		<main>
			<h2 className='id'>Advice #{advice.id} </h2>
			<q
				className='advice'
				style={{ opacity: loading ? 0.1 : 1 }}
				aria-live='polite'
			>
				{advice.advice}
			</q>
			<picture className='divider'>
				<source
					media='(min-width: 30rem)'
					srcSet={dividerDesk}
					width={444}
					height={16}
				/>
				<img
					src={dividerMobile}
					alt=''
					width={295}
					height={16}
				/>
			</picture>
			<button
				className='btn'
				type='button'
				aria-label='Generate a new piece of advice by clicking the dice'
				onClick={handleClick}
				disabled={loading}
			>
				<motion.img
					src={dice}
					alt=''
					width={24}
					height={24}
					variants={diceVariants}
					initial='initial'
					animate={loading ? 'rotate' : ''}
				/>
			</button>
		</main>
	)
}
