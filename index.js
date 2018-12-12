var recipes = {
  prop: "1"
};

function updateObjectWithKeyAndValue(object, key, value){
  recipes.prop2 = '2';
  return recipes;
}

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value){
  recipes.prop2 = '2';
  return recipes;
}

function deleteFromObjectByKey(recipes,prop){
  var newRecipe = Object.assign({}, recipes);
  delete newRecipe.prop;
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, prop){
  delete recipes.prop;
=======
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  recipes.prop2 = '2';
  return obj;
}

function deleteFromObjectByKey(obj, key){
  var newRecipe = object.assign({}, recipes);
  delete newRecipe.prop2;
>>>>>>> 2a2e231de83e47a09d08256ba2e358164aab0dc9
  return recipes;
}