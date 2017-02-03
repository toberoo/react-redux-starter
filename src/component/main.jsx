import React from 'react'

const main = ({title, count, counterActions}) => {
	return <div className="main">
		<p>
			{title}
		</p>
		<p>
			<button type="button" onClick= {counterActions.increment}>+</button>
			<button type="button" onClick= {counterActions.decrement}>-</button>
			<button type="button" onClick= {counterActions.reset}>Reset</button>
		</p>
		<p>
			{count}
		</p>
	</div>
}

export default main
