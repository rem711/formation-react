import '../styles/Categories.css'

function Categories({ setActiveCategories, categories, activeCategories }) {
	function changeActiveCategories(e) {
		let updatedActiveCategories = []
		const categoryName = e.target.value

		if(e.target.checked) updatedActiveCategories = [...activeCategories, categoryName]
		else updatedActiveCategories = activeCategories.filter(category => category !== categoryName)

		setActiveCategories(updatedActiveCategories)
	}

	function resetActiveCategories() {
		const categoriesCheckboxes = document.querySelectorAll('.lmj-category input[type=checkbox]:checked')
		categoriesCheckboxes.forEach(checkbox => checkbox.checked = false)

		setActiveCategories([])
	}

	return (
		<div className='lmj-categories'>
			{categories.map((category) => (
				<div key={category} className="lmj-category">
					<input type="checkbox" id={`category-${category}`} value={category} onChange={changeActiveCategories} />
					<label htmlFor={`category-${category}`}>{category}</label>
				</div>
			))}
			<div className="lmj-category">
				<button onClick={resetActiveCategories}>Réinitialiser</button>
			</div>
		</div>
	)
}

export default Categories
