//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', (e)=>{
	e.preventDefault();
let name=document.getElementById('name').value;
let age=document.getElementById('age').value;
function display(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
	      if (age >= 18) {
	        resolve(`Welcome, ${name}. You can vote.`);
	      } else {
	        reject(`Oh sorry ${name}. You aren't old enough.`);
	      }
    }, 1000);
	})
}
	display()
	.then(res=>{
		alert(res);
	})
	.catch(err=>{
		alert(err);
	})
});