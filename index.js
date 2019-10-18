// Sort an array alphabetically
function alphabetical(arr){
	var a=arr.sort(function(c,d)
	{
		nameA=c.toLowerCase();
		nameB=d.toLowerCase();
		if(nameA<NameB)
			return -1;
		if(nameA>nameB)
			return 1;
		return 0;
	})
	return a;
}
alphabetical(["dog", "wolf", "by", "family", "eaten"]);
//expect ["by", "dog", "eaten", "family", "wolf"];
