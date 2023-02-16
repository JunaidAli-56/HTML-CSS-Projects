console.log('this is tut 17 js');

//Events and Events of object.


document.getElementById('heading').addEventListener
('click' , function(e){
        console.log('clicked on code with Jarviz');
        console.log(e);

        //target tag: yeh dekhta hai ky ap ny kis chez sy target kia.
        let varaiable;
        varaiable = e.target;
        // varaiable = e.target.className;
        // varaiable = Array.from(e.target.classList);
        // varaiable = e.target.id;

        // varaiable = e.offsetX;
        // varaiable = e.offsetY;

        // varaiable = e.clientX;
        // varaiable = e.clientY;

        console.log(varaiable);

       // yeh tag jab ap kisi object py click  karein tab kisi website py ly jaye.
          // location.href = '//codeWithharry.com';
    }
);
