window.onload=()=>{
    main()
}



function main(){

    const root=document.getElementById('root')
    const btnChange=document.getElementById('btnChange')
    const HEXoutput=document.getElementById('HEXoutput')
    const RGBoutput=document.getElementById('RGBoutput')
    const CopyRGB=document.getElementById('CopyRGB')
    const CopyHEX=document.getElementById('CopyHEX')

    // global
    let toast=null 


    btnChange.addEventListener('click',function(){
        let RGBcolor=RGBcolorGenarate()
        let HEXcolor=HEXcolorGenarate()

        root.style.backgroundColor=RGBcolor
        HEXoutput.value=HEXcolor.toUpperCase();
        RGBoutput.value=RGBcolor;


    })






    CopyHEX.addEventListener('click',function(){
        navigator.clipboard.writeText(HEXoutput.value)


        
    })




    CopyRGB.addEventListener('click',function(){
        navigator.clipboard.writeText(RGBoutput.value)

        toastGenarate(msg)
        
    })



    function toastGenarate(msg){
        toast=document.createElement('div')

        toast.className='toast show'
        toast.innerText=`${msg} Copied`
        document.body.appendChild(toast)
    }

}

function RGBcolorGenarate(){
    const red=Math.floor(Math.random() * 255)
    const green=Math.floor(Math.random() * 255)
    const blue=Math.floor(Math.random() * 255)


    return `rgb(${red},${green},${blue})`
}
function HEXcolorGenarate(){
    const red=Math.floor(Math.random() * 255)
    const green=Math.floor(Math.random() * 255)
    const blue=Math.floor(Math.random() * 255)


    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}