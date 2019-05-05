let app = new Vue({
    el: "#app",
    data: {
      title: "Menu",
      message: "Vote for your menu!",
      backgroundImage: './img/wood.jpg',
      titleMenu:{
        fontFamily: 'Petit Formal Script',
        fontSize: '3rem',
        padding: '2rem',
        color: '#c5c5c5',
        marginBottom: '2rem',
        justifyContent: 'center',
        display: 'flex',
        textDecoration: 'underline',
      },

      subTitleMenu:{
        fontFamily: 'Petit Formal Script',
        fontSize: '2rem',
        padding: '1rem',
        color: '#c5c5c5',
        fontWeight: '800',
        justifyContent: 'center',
        display: 'flex',
      },

      menus:{
        fontFamily: 'Titillium Web',
        fontSize: '1.2rem',
        fontWeight: '650',
        color: 'white',
      },

      courses:{
        fontFamily: 'Titillium Web',
        fontSize: '1.4rem',
        color: '#c5c5c5',
        margin: '3rem 0 1rem 3rem',
        color: 'white',
        textDecoration: 'underline',
        justifyContent: 'center',
        display: 'flex'
      },

      newMenu:{
        fontFamily: 'Titillium Web',
        fontSize: '1.2rem',
        margin: '3rem 0px 3rem 0rem',
        fontWeight: '650'
    
      },
      newDish:{
        fontFamily: 'Titillium Web',
        fontSize: '1.2rem',
        margin: '2rem 0px 2rem 0rem'    
     
      },
      button:{
        padding: '0.4rem',
        borderRadius: '0.3rem',
        backgroundColor: 'rgb(154, 23, 23)',
        border: 'solid #191818 0.07rem',
        color: 'white',
        marginLeft: '3rem',
        fontFamily: 'Titillium Web',
      },

      showMenu: true,
      menu: [
        { name: "CARPACCIO ALLA ROMANA", ingredients: "Finely sliced beef fillet, crispy artichokes, pecorino, rocket, olive oil & Harry’s Bar dressing", price: "£9.20", votes: 0 },
        { name: "CESAR SALAD", ingredients: "Fried free-range egg, British asparagus, truffle, crispy pancetta & grilled tortano bread", price:"£7.00" ,votes: 0 },
        { name: "TRUFFLED EGG & ASPARAGUS", ingredients: "Carrot Top Salad, Crackers, Crudité",price:"£8.10",votes: 0 },
        { name: "SPRING TAGLIATELLE CARBONARA", ingredients: "Smoky pancetta, asparagus, peas, cracked black pepper & Parmesan",price:"£7.10",votes: 0 },
        { name: "TAGLIATELLE BOLOGNESE", ingredients: "Rich pork, beef & red wine ragù with Parmesan - Make it veggie -just ask",price:"£7.00",votes: 0 },
        { name: "TRUFFLE RAVIOLI", ingredients: "Pasta stuffed with fontal cheese, black truffle & ricotta, in a creamy truffle sauce",price:"£16.5",votes: 0 },
        { name: "JAMIE’S STEAK TAGLIATA", ingredients: "Flash-cooked Dedham Vale bavette steak with rocket, slow-roasted tomatoes, Parmesan, balsamic & extra virgin olive oil",price:"£15.90",votes: 0 },
        { name: "CALABRIAN CHICKEN", ingredients: "Fiery free-range chicken breast with a tomato, ’nduja, Leccino olive & caper sauce, rocket, Parmesan & your choice of side",price:"£14.80",votes: 0 },
        { name: "LAMB CHOPS", ingredients: "Poll Dorset lamb loin cooked al mattone & served with pistachios, smashed artichokes, olive tapenade & herb salad",price:"£19.50",votes: 0 },

      ],
      desserts: [
        { name: "CHOCOLATE FONDANT", ingredients: "Light & fluffy chocolate pudding served warm with white chocolate gelato, praline & chocolate sauce", price: "£7.00", votes: 0 },
        { name: "CASSATA CHEESECAKE", ingredients: "Ricotta cheesecake studded with candied fruit & nuts, topped with blood orange compote & pistachios", price:"£6.80" ,votes: 0 },
        { name: "RICH CHOCOLATE BROWNIE", ingredients: "Chocolate sauce, salted caramel popcorn gelato & caramelised popcorn",price:"£6.00",votes: 0 },
        { name: "ZUCCOTTO DI PANETTONE", ingredients: "Panettone stuffed with vanilla ice cream, candied fruit, nuts & maraschino cherries",price:"£6.80",votes: 0 }
      ],
      newName: "",
      newIngredients: ""
    
  
    },
   
    methods: {
      toggleShow: function() {
       
        if (this.$data.showMenu) {
          this.$data.showMenu = false;
        } else {
          this.$data.showMenu = true;
        }
      },
      addVote: function(menu) {
        menu.votes += 1;
      },
      removeVote: function(menu) {
        menu.votes -= 1;
      },
      addDish: function(name, ingredients) {
        debugger
        if (name.trim().length > 0 && ingredients.trim().length > 0) {
          this.$data.menu.push({
            name: name,
            ingredients: ingredients,
          
          });
  
          this.$data.newName = "";
          this.$data.newIngredients = "";
        
        } else {
          alert("Name and ingredients are required");
        }
      },
      deletemenu: function(menu) {
        console.log("menu", menu);
        const index = this.$data.menu.indexOf(menu);
        if (index > -1) {
          this.$data.menu.splice(index, 1);
        } else {
          alert("no menu");
        }
      }
    }
  });