let cells = document.querySelectorAll(".cell")
let clrBtn = document.getElementById("clrBtn")

clrBtn.addEventListener("click", clear)

let win = [
				[1,2,3],
				[4,5,6],
				[7,8,9],
				
				[1,4,7],
				[2,5,8],
				[3,6,9],
				
				[1,5,9],
				[3,5,7],
]

				let redTurn = true;
				let red = []
				let blue = []


function clear(){
				cells.forEach((cell)=>{
								cell.classList.remove("occupied-red")
								cell.classList.remove("occupied-blue")
								cell.removeEventListener("click" , turn)
				})
				
				redTurn = true;
			 red = []
				blue = []
				
				addEvent()
}
clear()

function addEvent(){
				cells.forEach( (cell,i)=>{
				cell.addEventListener("click", turn)
				cell.i = i+1
})
}

addEvent()

function isTrue(arr, arr2){
  return arr.every(y => arr2.includes(y));
}

function chkWin(target,arr){
				for(let i = 0;i<arr.length ; i++){
								if (isTrue(arr[i],target)) {
												return true
								}
				}
				
				let all = red.concat(blue)
				if (all.length === 9) {
								alert("Draw")
								clear()
				}else{
								return false
				}
}


function turn(){
				if (redTurn == true) {
								this.classList.add("occupied-red")
								this.removeEventListener("click", turn)
								
								red.push(this.i)
								if (chkWin(red,win)) {
												alert("X Win")
												clear()
								}
								
								redTurn = !redTurn

				}else if(redTurn == false){
								this.classList.add("occupied-blue")
								this.removeEventListener("click", turn)
								blue.push(this.i)
								
								if (chkWin(blue,win)) {
												alert("O Win")
												clear()
								}
								
								
								redTurn = !redTurn
				}
}



