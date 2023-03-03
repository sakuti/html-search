const gridElement = document.getElementsByClassName('grid')[0];


/**
 * Filter the grid of items based on the search term.
 * @param {string} input 
 */
function filterGrid(input) {
	var filter = input.value.toUpperCase();
	var grid = document.getElementsByClassName('grid')[0];
	var gridChilds = grid.getElementsByClassName('grid-child');
	
	for (i = 0; i < gridChilds.length; i++) {
		if (gridChilds[i].id.toUpperCase().startsWith(filter)) {
			gridChilds[i].style.display = 'flex';
		} else {
			gridChilds[i].style.display = 'none';
		}
	}
}


// Add event listeners
document.getElementById('searchField').addEventListener('input', function() {
	filterGrid(this);
})

document.getElementById('change-type-1').addEventListener('click', function() {
	gridElement.classList = 'grid grid-type2';
	document.getElementById('change-type-1').classList = 'icon selected';
	document.getElementById('change-type-2').classList = 'icon';
});

document.getElementById('change-type-2').addEventListener('click', function() {
	gridElement.classList = 'grid grid-type1';
	document.getElementById('change-type-1').classList = 'icon';
	document.getElementById('change-type-2').classList = 'icon selected';
});