var recipes = {
  prop: "1"
};

function updateObjectWithKeyAndValue(object, key, value){
  recipes.prop2 = '2';
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  recipes.prop2 = '2';
  return obj;
}

function deleteFromObjectByKey(obj, key){
  var newRecipe = object.assign({}, recipes);
  delete newRecipe.prop2;
  return recipes;
}