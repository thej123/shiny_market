let my_catalog = ['https://qph.fs.quoracdn.net/main-qimg-be96d4a2ac67f0705c79c907f0c1141e', 'https://images-na.ssl-images-amazon.com/images/I/514okJiliJL._SL500_AC_SS350_.jpg',
    'https://images.karrimor.com/images/products/44238490_l.jpg', 'https://www.jared.com/images/products/3927/392783700_MV_ZM_JAR.jpg', 'https://imagescdn.simons.ca/images/6652/184787/35/A1_2.jpg?__=9']

    let my_catalog_desc = ['Massagers & Grooming Tools', 'Kitchen Mixer', 'Men\'s 3 in 1 jacket', '10k to 14k gold earrings', 'Women\'s coat']
    let circle_around;

    // This function will be loading the item
    function load_item(arg=Math.floor(Math.random()*4)){
        clearInterval(circle_around)
        document.getElementById('hidden_div').hidden = false;
        document.images[0].src = my_catalog[arg];
        document.images[0].alt = arg;
        document.getElementById('descriptions').innerHTML = my_catalog_desc[arg];
    }

    // Run when 'GO' button pressed
    function go_load(){
        let index = document.forms[0].selection.options.selectedIndex;
        load_item(index);
    }

    // Start rotation of the images when user clicks on the image
    function rotation(){
        circle_around = setInterval("next()", 1000);
    }

    // Show the next image
    function next(){
        let image = document.images[0]
        let current_index = image.alt;
        let new_index = parseInt(current_index)+1;
        new_index = new_index % 5;
        
        image.src = my_catalog[new_index];
        image.alt = new_index;
        document.getElementById('descriptions').innerHTML = my_catalog_desc[new_index];
    }   

    // Show the previous image
    function previous(){
        let image = document.images[0]
        let current_index = image.alt;
        let new_index = parseInt(current_index)-1;
        if (new_index<0) {new_index = 4};

        image.src = my_catalog[new_index];
        image.alt = new_index;
        document.getElementById('descriptions').innerHTML = my_catalog_desc[new_index];
    }