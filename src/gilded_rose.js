class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

var item = []; 

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Aged Brie"){
        item = this.items[i]
        brieModifier(item);
      }else if (this.items[i].name.includes("Backstage passes")){
        item = this.items[i]
        concertModifier(item);
      }else if (this.items[i].name.includes("Sulfuras")){
        item = this.items[i]
        sulfuras(item);
      }else if (this.items[i].name.includes("Conjured")){
        item = this.items[i]
        conjured(item);
      }else if (this.items[i].sellIn <= 0){
        this.items[i].quality = this.items[i].quality - this.items[i].quality;
      }else {
        this.items[i].quality -= 1;
        this.items[i].sellIn -= 1;
      }
    }
    return this.items;
  }
}



function brieModifier(item) {
  if (item.quality > 50){
    item.destroy;
  }else if (item.sellIn <= 5){
    item.quality += 3;
    item.sellIn -= 1;
  }else if (item.sellIn <= 10){
    item.quality += 2; 
    item.sellIn -= 1;
  }else {
    item.quality += 1;
    item.sellIn -= 1;
  }
  return item;
}


function concertModifier(item) {
  if (item.quality > 50){
    item.destroy;
  }else if (item.sellIn <= 0){
    item.quality = 0;
  }else if (item.sellIn <= 5){
    item.quality += 3;
    item.sellIn -= 1;
  }else if (item.sellIn <= 10){
    item.quality += 2; 
    item.sellIn -= 1;
  }else {
    item.quality += 1;
    item.sellIn -= 1;
  }
  return item;
}


function conjured(item) {
  item.quality -= 2;
  item.sellIn -= 1;
  return item;
}

function sulfuras(item) {
  return item;
}


module.exports = {
  Item,
  Shop
}
