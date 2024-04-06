import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function Attribution() {
	const [show, setShow] = React.useState(false)

	const handleToggle = () => {
		setShow(prevShow => !prevShow)
	}

	const variants = {
		animation: {
			translate: '-0.25rem',
			transition: { type: 'spring', stiffness: 300 },
		},
	}

	return (
		<div
			style={{
				position: 'fixed',
				bottom: '0.5rem',
				right: show ? '0.5rem' : '-12.5rem',
				transition: '0.3s',
				display: 'flex',
				alignItems: 'center',
				padding: '1rem 0 1rem 1rem',
				color: 'white',
				backgroundColor: show ? 'hsla(220, 15%, 25%, 0.8)' : 'transparent',
				backdropFilter: show ? 'blur(0.25rem)' : 'none',
				borderRadius: '0.5rem',
				boxShadow: show ? '0 0 1rem hsla(var(--clr-neutral-1), 0.25)' : 'none',
			}}
		>
			<motion.button
				type='button'
				title={!show ? 'Show attribution' : 'Hide attribution'}
				aria-expanded={show ? 'true' : 'false'}
				onClick={handleToggle}
				style={{
					width: '3rem',
					height: '3rem',
					display: 'grid',
					placeContent: 'center',
					backgroundColor: show ? 'transparent' : 'hsl(var(--clr-neutral-1))',
					borderRadius: '50% 0 0 50%',
					rotate: show ? '180deg' : '0deg',
					order: show ? '1' : '0',
				}}
				variants={variants}
				whileHover='animation'
				whileFocus='animation'
			>
				<FaAngleLeft
					aria-hidden='true'
					style={{ color: 'white', width: '2rem' }}
				/>
			</motion.button>
			<p
				style={{
					fontFamily: 'sans-serif',
					fontSize: '14px',
					textAlign: 'center',
					lineHeight: '1.6',
					visibility: show ? 'visible' : 'hidden',
				}}
			>
				Challenge by{' '}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					style={{ color: 'lightgray' }}
				>
					Frontend Mentor
				</a>
				.
				<br />
				Coded by{' '}
				<a
					href='https://www.frontendmentor.io/profile/fernandolapaz'
					title='Frontend Mentor Profile'
					style={{ color: 'lightgray' }}
				>
					Fernando
				</a>
				.
			</p>
		</div>
	)
}
