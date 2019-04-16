function Phone(brand, price, color, size, feature) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
	this.feature = feature;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " ojro, also equipped with " + this.feature + " and it's size is " + this.size + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 1550, "black", "decent", "NFC" );
var iPhone6S = new Phone("Apple", 2250, "gold", "fancy", "whatever you dream about" );
var onePlusOne = new Phone("HTC", 1250, "silver", "brick", "fishing rod" );

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();