// chequeo de elementos
let val1El = document.getElementById("color1");
let val2El = document.getElementById("color2");
let val3El = document.getElementById("color3");
let val4El = document.getElementById("color4");
let val5El = document.getElementById("color5");
let stepsEl = document.getElementById("steps");
const nickName = document.getElementById("nickname");
const coloredNick = document.getElementById("coloredNick");
const coloredNickP = document.createElement("p");
let newNick = nickName.value;
let rgbtype = 'Essentials (&#rrggbb)';
let numberOfColors = 2;
document.getElementById('darkmode').checked = true
darkMode()

function hideColors() {
  if (numberOfColors == 2) {
    document.getElementById("color3").style.display = "none";
    document.getElementById("label3").style.display = "none";
    document.getElementById("color4").style.display = "none";
    document.getElementById("label4").style.display = "none";
  } else if (numberOfColors == 3) {
    document.getElementById("color3").style.display = "block";
    document.getElementById("label3").style.display = "block";
    document.getElementById("color4").style.display = "none";
    document.getElementById("label4").style.display = "none";
  } else if (numberOfColors == 4) {
    document.getElementById("color3").style.display = "block";
    document.getElementById("label3").style.display = "block";
    document.getElementById("color4").style.display = "block";
    document.getElementById("label4").style.display = "block";
  }
}

function darkMode() {
  if (document.getElementById('darkmode').checked == true) {
    document.getElementById('types').classList.add("dark");
    document.getElementById('numOfColors').classList.add("dark");
    document.body.classList.add('dark');
    document.getElementById('graylabel1').classList.replace("gray", "darkgray");
    document.getElementById('error').classList.replace("errortext", "darkerrortext");
    document.getElementById('color1').classList.add("darktextboxes");
    document.getElementById('color2').classList.add("darktextboxes");
    document.getElementById('color3').classList.add("darktextboxes");
    document.getElementById('color4').classList.add("darktextboxes");
    document.getElementById('color5').classList.add("darktextboxes");
    nickName.classList.add("darktextboxes");
    document.getElementById('spitter').classList.add("darktextboxes");
  } else {
    document.getElementById('types').classList.remove("dark");
    document.getElementById('numOfColors').classList.remove("dark");
    document.body.classList.remove('dark');
    document.getElementById('graylabel1').classList.replace("darkgray", "gray");
    document.getElementById('error').classList.replace("darkerrortext", "errortext");
    document.getElementById('color1').classList.remove("darktextboxes");
    document.getElementById('color2').classList.remove("darktextboxes");
    document.getElementById('color3').classList.remove("darktextboxes");
    document.getElementById('color4').classList.remove("darktextboxes");
    document.getElementById('color5').classList.add("darktextboxes");
    nickName.classList.remove("darktextboxes");
    document.getElementById('spitter').classList.remove("darktextboxes");
  }
}

function showError() {
  if (document.getElementById('spitter').textContent.length > "800") {
    document.getElementById('error').style.display = "block";
    document.getElementById('spitter').style.height = "70px";
    document.getElementById('spitter').style.marginBottom = "5px";
  } else {
    document.getElementById('error').style.display = "none";
    document.getElementById('spitter').style.height = "95px";
    document.getElementById('spitter').style.marginBottom = "10px";
  }
}

function hex (c) {
  let s = "0123456789abcdef";
  let i = parseInt (c);
  if (i == 0 || isNaN (c))
    return "00";
  i = Math.round (Math.min (Math.max (0, i), 255));
  return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
}

/* conversion */
function convertToHex (rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* remov_caracteres */
function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

/* conver_rgb parameters*/
function convertToRGB (hex) {
  let color = [];
  color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
  color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
  color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
  return color;
}

function generateColor(colorStart,colorEnd,colorCount){

	// gradientes
	let start = convertToRGB (colorStart);    


	let end   = convertToRGB (colorEnd);    

	
	let len = colorCount;

	
	let alpha = 0.0;

	let result = [];
	
	for (i = 0; i < len; i++) {
		let c = [];
		alpha += (1.0/len);
		
		c[0] = start[0] * alpha + (1 - alpha) * end[0];
		c[1] = start[1] * alpha + (1 - alpha) * end[1];
		c[2] = start[2] * alpha + (1 - alpha) * end[2];

		result.push(convertToHex (c));
		
	}
	
	return result;
	
}

function combineColors(gradient1,gradient2) {
  result = [];
  result = gradient1.concat(gradient2)
  return result;
}

function updateSpitter(event) {
  nickName.value = nickName.value.replace('  ', ' ');
  if (rgbtype.includes('/nick')) {
    nickName.value = nickName.value.replace(/ /g, '');
    if(nickName.value != '') {
      let letters = /^[0-9a-zA-Z_]+$/;
      if(!nickName.value.match(letters)) nickName.value = nickName.value.replace(event.data, '');
      if(!nickName.value.match(letters)) nickName.value = 'Gradieeennnttt';
    }
  }
  newNick = nickName.value
  if(newNick == '') {
    newNick = 'NET FREE'
  }
  let half = newNick.length/2
  let thirds = newNick.length/3
  let gradientHalf1 = generateColor(val2El.value,val1El.value,half)
  let gradientHalf2 = generateColor(val3El.value,val2El.value,half)
  let gradientThirds1 = generateColor(val2El.value,val1El.value,thirds)
  let gradientThirds2 = generateColor(val3El.value,val2El.value,thirds)
  let gradientThirds3 = generateColor(val4El.value,val3El.value,half)
  let essentialscolorsout = [];
  let luckpermscolorsout = [];
  let othercolorsout = [];

  let spitter = document.getElementById("spitter");
  var colors
  numberOfColors == 3 ? combineColors(gradientHalf1,gradientHalf2) : generateColor(val2El.value,val1El.value,newNick.length)
  if (numberOfColors == 2) {
    colors = generateColor(val2El.value,val1El.value,newNick.length)
  }else if (numberOfColors == 3) {
    colors = combineColors(gradientHalf1,gradientHalf2)
  }else if (numberOfColors == 4) {
    let uwu = combineColors(gradientThirds1,gradientThirds2)
    colors = combineColors(uwu,gradientThirds3)
  }

  let nickspaced = newNick.split("");
  let colorspp = ('&' + colors.join('').split('').join('&')).match(/.{1,12}/g);
  for (let i = 0; i < newNick.length; i++) {
    colorspp[i] = colorspp[i].replace('&', '&x&');

if (nickspaced[i]===" "){
	    essentialscolorsout[i] = ' ';
	}else{
    essentialscolorsout[i] = '<span style="color:#' +colors[i]+'">' + nickspaced[i]+'</span>'
    luckpermscolorsout[i] = '{#' + colors[i] + '}' + nickspaced[i]
    othercolorsout[i] = colorspp[i] + nickspaced[i]
	}
  }
  let output = '';
  if (rgbtype.includes('x')) {
    if (rgbtype.includes('u')) {
      output = othercolorsout.join('').replace(/&/g, '\\u00A7');
    } else if (rgbtype.includes('§')) {
      output = othercolorsout.join('').replace(/&/g, '§');
    } else {
      output = othercolorsout.join('');
    }
  } else if (rgbtype.includes('')) {
    output = essentialscolorsout.join('');
  } else {
    output = luckpermscolorsout.join('');
  }
  let num = '';
  if (rgbtype.includes('&#')) num = 8;
  if (rgbtype.includes('{#')) num = 9;
  if (rgbtype.includes('x')) num = 14;


var h1 ='<h1 style="text-align:center">';
var h1f = '</h1>';
  spitter.innerText = h1+output+h1f;
  displayColoredName(newNick, colors);
  showError();
}

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
updateSpitter();

async function displayColoredName(nickName, colors) {

  coloredNickP.innerHTML = "";
  for (let i = 0; i < nickName.length; i++) {
    const coloredNickSpan = document.createElement("span");

    coloredNickSpan.style.color = colors[i];
    coloredNickSpan.textContent = nickName[i];
    coloredNickP.append(coloredNickSpan);
  }
  coloredNick.append(coloredNickP);
}
/* mod_code_darkzhn*/