var Items = (function (){
	var items = ['Ring of regen', 'Iron branch', 'Ring of protection', 'Iron branch', 'Recipe', 'Circlet', 'Magic stick', 'Chainmail'];

	var recipes = [
		{
			item : ['Iron branch', 'Chainmail', 'Recipe'],
			recipe : 'Buckler'
		},

		{
			item : ['Iron branch', 'Ring of regen', 'Recipe'],
			recipe : 'Headdress'
		},

		{
			item : ['Iron branch', 'Iron branch', 'Circlet', 'Magic stick'],
			recipe : 'Magic Wand'
		}
	];

	function getItems(){
		return items;
	}

	function getRecipes(){
		return recipes;
	}
	
	return {
		getItems : getItems,
		getRecipes : getRecipes
	};
})();
