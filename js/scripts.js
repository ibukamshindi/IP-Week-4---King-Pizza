
function Pizza(size,crust,cheese,mushrooms,delivery){
  this.size = size;
  this.crust = crust;
  this.cheeseTopping = cheese;
  this.mushroomsTopping = mushrooms;
  this.delivery = delivery
  this.cost;
}

Pizza.getCost= function() {
  if (this.size==="small"){
    this.cost = 450;
  } else if (this.size==="medium"){
    this.cost=650;
  } else if (this.size==="large"){
    this.cost = 950;
  }
  if (this.crust==="Hand tossed"){
    this.cost += 100;
  } else if (this.crust==="Thin Crunchy"){
    this.cost += 50;
  }  
  for (var i=0; i<this.cheeseTopping.length; i++){
    this.cost +=30;
  }
  for (var i=0; i<this.mushroomsTopping.length; i++){
    this.cost +=20;
  }
  return this.cost;
}

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    $("#pizza-options").hide();
    var inputtedSize = $("select#size").val();
    var inputtedCrust = $("select#crust").val();
    var 
  }

});