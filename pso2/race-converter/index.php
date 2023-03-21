<!DOCTYPE html>
<!-- saved from url=(0059)https://madevil-evolution.firebaseapp.com/sega/pso2/convert -->
<html><head><title>PSO2 Character Race Converter by Madevil-Evolution</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="icon" href="http://ayaldev.com/wp-content/uploads/2017/05/cropped-favico-32x32.jpg" sizes="32x32" /><link rel="icon" href="http://ayaldev.com/wp-content/uploads/2017/05/cropped-favico-192x192.jpg" sizes="192x192" /><link rel="apple-touch-icon-precomposed" href="http://ayaldev.com/wp-content/uploads/2017/05/cropped-favico-180x180.jpg" /><meta name="msapplication-TileImage" content="http://ayaldev.com/wp-content/uploads/2017/05/cropped-favico-270x270.jpg" />
<style>
* {
	font-family: monospace;
}
</style>
<script src="./convert_files/jquery-1.8.3.min.js.download"></script>
<script>
/*
http://stackoverflow.com/questions/18638900/javascript-crc32
*/
var makeCRCTable = function()
{
	var c;
	var crcTable = [];
	for(var n =0; n < 256; n++)
	{
		c = n;
		for(var k = 0; k < 8; k++)
			c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
		crcTable[n] = c;
	}
	return crcTable;
}

var crc32 = function(str)
{
	var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
	var crc = 0 ^ (-1);
	for (var i = 0; i < str.length; i++)
		crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
	return (crc ^ (-1)) >>> 0;
};

/*
http://stackoverflow.com/questions/202605/repeat-string-javascript
*/
// for IE (not EDGE)
if (! String.prototype.repeat)
{
	String.prototype.repeat = function(num)
	{
		return new Array(num + 1).join(this);
	}
}

/*
http://www.simplycalc.com/crc32-source.php
*/
Number.prototype.toHex = function(len)
{
	if (typeof(len) === 'undefined')
		len = 8;
	var num = this < 0 ? (0xFFFFFFFF + this + 1) : this;
	var hex = num.toString(16);
	var pad = hex.length < len ? len - hex.length : 0;
	return '0'.repeat(pad) + hex;
}

/*
http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
*/
function strrev(s)
{
	return s.split('').reverse().join('');
}

/*
https://github.com/FlorisCreyf/hex-dump/blob/master/main.js
*/
function get_binary($input)
{
	var $output = [];

	for (var $i = 0; $i < ($input.length - 1); $i += 2)
		$output.push(parseInt($input.substr($i, 2), 16));

	return String.fromCharCode.apply(String, $output);
}

function get_hex($input)
{
	var $output = '';
	for (var $i = 0; $i < $input.length; $i++)
	{
		var $char = $input.charAt($i).charCodeAt(0).toString(16);
		if ($char.length == 1)
			$char = '0' + $char;
		$output += $char;
	}
	return $output;
}

/*
http://stackoverflow.com/questions/6965107/converting-between-strings-and-arraybuffers
*/
function str2ab(str)
{
	var buf = new ArrayBuffer(str.length);
	var bufView = new Uint8Array(buf);
	for (var i = 0, strLen = str.length; i < strLen; i++)
		bufView[i] = str.charCodeAt(i);
	return buf;
}

/*
https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
*/
function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function save_file($input)
{
	var textFileAsBlob = new Blob([$input], {type: 'application/octet-binary'});
	var downloadLink = document.createElement('a');
	downloadLink.download = 'output.' + $(':input[name="format"]').val();
	downloadLink.innerHTML = 'download';
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = 'none';
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

// ==================

$races =
{
	"fhp": "d6a7b25866da55f0",
	"fnp": "404b41c9322a9795",
	"fcp": "90363a75e53329af",
	"fdp": "a2b73d1243689be8",
	"mhp": "5fed49cea549224b",
	"mnp": "1a1ff43059a4bb2b",
	"mcp": "e2f8785b1f806055",
	"mdp": "851394498bfbf37b",
};

function format_preview($input)
{
	var $output = '';
	for (var $i = 0; $i < $input.length; $i++)
	{
		if ($i % 2 == 0)
			$output += ' ';
		$output += $input[$i];
		if ($i % 32 == 31)
			$output += '\n';
	}
	return $output;
}

function get_hash($input)
{
	var $output = [];
	for (var $i = 0; $i < ($input.length - 1); $i += 2)
		$output.unshift($input.substr($i, 2));
//		$output.unshift(parseInt($input.substr($i, 2), 16));
	return $output.join('');
}

function check_race($input)
{
	var $output = '';
	$.each($races, function($ext, $code)
	{
		if ($input == $code)
			$output = $ext;
	});
	return $output;
}

function save()
{
	var $race = $(':input[name="race"]').val();
	var $ext = $(':input[name="format"]').val();
	if ($race == '')
	{
		alert('wrong file format?');
		return;
	}
	if ($race == $ext)
	{
		alert('nothing to do');
		return;
	}

	save_file(str2ab(get_binary($spool)));
}

function convert()
{
	var $race = $(':input[name="race"]').val();
	var $ext = $(':input[name="format"]').val();
	if ($race == '')
		return;

	var $text = '';
	$text = $spool.substr((24 * 2));
	$text = $races[$ext] + $text;

	var $hash = get_hash(crc32(get_binary($text)).toHex());

	if ($race == $ext)
	{
		$('button[name="download"]').prop('disabled', true);
		$(':input[name="hash"]').val('');
	}
	else
	{
		$('button[name="download"]').prop('disabled', false);
		$(':input[name="hash"]').val($hash);
	}

//	var $prepand = '06000000dc020000' + $hash + '00000000';
	var $prepand = $spool.substr(0, (8 * 2)) + $hash + $spool.substr((12 * 2), (4 * 2));
	$spool = $prepand + $text;
	$('textarea').val(format_preview($spool));
}

/*
http://stackoverflow.com/questions/31391207/javascript-readasbinarystring-function-on-e11
*/
// for NOT webkit nor FF
if (! FileReader.prototype.readAsBinaryString)
{
	FileReader.prototype.readAsBinaryString = function (fileData)
	{
		var binary = "";
		var pt = this;
		var reader = new FileReader();
		reader.onload = function(e)
		{
			var bytes = new Uint8Array(reader.result);
			var length = bytes.byteLength;
			for (var i = 0; i < length; i++)
			{
				binary += String.fromCharCode(bytes[i]);
			}
			// pt.result  - readonly so assign binary
			pt.content = binary;
			$(pt).trigger('onload');
		};
		reader.readAsArrayBuffer(fileData);
	}
}

$(window).on('load', function()
{
	$.each($races, function($ext, $code)
	{
		$(':input[name="format"]').append('<option value="' + $ext + '">' + $ext + '</option>')
	});

	$spool = '';
	$(':input[name="upload"]').on('change', function(event)
	{
		if (event.target.files.length > 0)
		{
			$('button[name="download"]').prop('disabled', true);
			var $file = event.target.files[0];
			if ($file['size'] != 748)
			{
				alert('wrong file format?');
				return;
			}

			var reader = new FileReader();
			reader.readAsBinaryString($file);
			reader.onload = function($event)
			{
				if (! $event)
					$spool = get_hex(reader.content); // reader.content is IE only
				else
					$spool = get_hex($event.target.result);
				var $race = check_race($spool.substr((16 * 2), (8 * 2)));
				$(':input[name="race"], :input[name="format"]').val($race);
				$('textarea').val(format_preview($spool));
			};
		}
	});
});

</script>
<style>
</style>
</head>
<body data-streamable-extension-installed="cr-1.0.1">
<input type="file" name="upload">
from <input type="text" name="race" size="3" readonly=""> to
<select name="format" onchange="convert();"><option value="fhp">fhp</option><option value="fnp">fnp</option><option value="fcp">fcp</option><option value="fdp">fdp</option><option value="mhp">mhp</option><option value="mnp">mnp</option><option value="mcp">mcp</option><option value="mdp">mdp</option></select>
<br>
<textarea name="debug" rows="50" cols="50" readonly="" style="overflow: hidden;"></textarea>
<br>
new hash <input name="hash">
<button name="download" onclick="save()" disabled="">download</button>


<script src="chrome-extension://hhojmcideegachlhfgfdhailpfhgknjm/web_accessible_resources/index.js"></script></body></html>