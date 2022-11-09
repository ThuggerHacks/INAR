var limdu = require('limdu');

var colorClassifier = new limdu.classifiers.NeuralNetwork();

colorClassifier.trainBatch([
	{input: { r: 0.03, g: 0.7, b: 0.5 }, output: 0},  // black
	{input: { r: 0.16, g: 0.09, b: 0.2 }, output: 1}, // white
	{input: { r: 0.5, g: 0.5, b: 1.0 }, output: 1}   // white
	]);

console.log(colorClassifier.classify({ r: 1, g: 1, b: 1 }));  // 0.99 - almost white