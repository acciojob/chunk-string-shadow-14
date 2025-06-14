function stringChop(str, size) {
  // your code here
	let x = parseInt(size);
	let ans =[];
	let finall=0;
	while(finall<str.length){
		ans.push(str.slice(finall,Math.min(finall+x,str.length)));
		finall+=x;
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
