const counts = document.querySelectorAll('.count')
const speed = 8

counts.forEach((counter) =>{
    function upData(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerHTML)
        const inc = target / speed
        if(count < target){
            counter.innerText =Math.floor(inc+count)
            setTimeout(upData, 1)
        }else{
            counter.innerText = target
        }
    }
    upData()
})