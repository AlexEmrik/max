const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

function addInfo1() {
    const elem = document.getElementById('merit1')
    if (elem.childNodes.length == '') {
        document.getElementById('merit1').innerHTML = 'Bussen är fotad vid lunda depå';
        document.getElementById("merit1").style.maxHeight = "10000px";
    }
    else{
        document.getElementById('merit1').innerHTML = '';
        document.getElementById("merit1").style.maxHeight = "0px"   ;
    }
   }
   function addInfo2() {
    const elem = document.getElementById('merit2')
    if (elem.childNodes.length == '') {
        document.getElementById('merit2').innerHTML = 'Hunden är fotad vid Ekerö depå';
        document.getElementById("merit2").style.maxHeight = "10000px";
    }
    else{
        document.getElementById('merit2').innerHTML = '';
        document.getElementById("merit2").style.maxHeight = "0px"   ;
    }  
}
   function addInfo3() {
    const elem = document.getElementById('merit3')
    if (elem.childNodes.length == '') {
        document.getElementById('merit3').innerHTML = 'Bilden är på Ekerö depån/garaget';
        document.getElementById("merit3").style.maxHeight = "10000px";
    }
    else{
        document.getElementById('merit3').innerHTML = '';
        document.getElementById("merit3").style.maxHeight = "0px"   ;
    }
}
    function addInfo4() {
    const elem = document.getElementById('merit4')
    if (elem.childNodes.length == '') {
        document.getElementById('merit4').innerHTML = 'Bilden är från en födelsedagsfotografering som tog plats i Hågelbys Slottspark';
        document.getElementById("merit4").style.maxHeight = "10000px";
    }
    else{
        document.getElementById('merit4').innerHTML = '';
        document.getElementById("merit4").style.maxHeight = "0px"   ;
    }
    }
    function addInfo5() {
        const elem = document.getElementById('merit5')
        if (elem.childNodes.length == '') {
            document.getElementById('merit5').innerHTML = 'Bilden är från min fotoutställning som tog plats i Stocksund';
            document.getElementById("merit5").style.maxHeight = "10000px";
        }
        else{
            document.getElementById('merit5').innerHTML = '';
            document.getElementById("merit5").style.maxHeight = "0px"   ;
        }
        }
        function addInfo6() {
            const elem = document.getElementById('merit6')
            if (elem.childNodes.length == '') {
                document.getElementById('merit6').innerHTML = 'Bilden är från Roll-SM som tog plats vid Fridhemskanotisternas kanotklubb';
                document.getElementById("merit6").style.maxHeight = "10000px";
            }
            else{
                document.getElementById('merit6').innerHTML = '';
                document.getElementById("merit6").style.maxHeight = "0px"   ;
            }
            }

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });


