<p align="center">
	<a href="https://github.com/luamoris">
		<img width="200" src="https://cutt.ly/U72fY1a" alt="Logo"/>
	</a>
</p>
<h3 align="center"><strong>LUAMORIS</strong></h3>
<p align="center">
	<a href="https://luamoris.com">luamoris.com</a>
</p>

<h2 align="center"><strong>LmSELECT</strong></h2>


+ HTML Castomization of the SELECT element

#### Example

##### How to connect

```html
<!DOCTYPE html>
<html lang="en">

<head>
   <!-- Import LmSelector style -->
   <link rel="stylesheet" type="text/css" href="https://luamoris.github.io/lmSelect/lmSelect/lmSelect.css">
</head>

<body>
   <!-- Your code -->

   <!-- Import LmSelector script -->
   <script src="https://luamoris.github.io/lmSelect/lmSelect/lmSelect.js"></script>

   <!-- Your main.js -->
   <script src="./main.js"></script>
</body>

</html>
```

##### How it works

`index.html`

```html
<!-- Select 1 -->
<div id="formId1" class="form-group">
   <div class="dropdown">
      <button class="dropdown-btn" data-value="1">value 1</button>
      <input type="text" name="dropdown-input" class="dropdown-input" value="">
      <ul class="dropdown-list">
         <li class="dropdown-item" data-value="1">value 1</li>
         <li class="dropdown-item" data-value="2">value 2</li>
         <li class="dropdown-item" data-value="3">value 3</li>
         <li class="dropdown-item" data-value="4">value 4</li>
         <li class="dropdown-item" data-value="5">value 5</li>
         <li class="dropdown-item" data-value="6">value 6</li>
      </ul>
   </div>
</div>

<!-- Select 2 -->
<div id="formId1" class="form-group">
   <div class="dropdown">
      <button class="dropdown-btn" data-value="1">value 1</button>
      <input type="text" name="dropdown-input" class="dropdown-input" value="">
      <ul class="dropdown-list">
         <li class="dropdown-item" data-value="1">value 1</li>
         <li class="dropdown-item" data-value="2">value 2</li>
         <li class="dropdown-item" data-value="3">value 3</li>
         <li class="dropdown-item" data-value="4">value 4</li>
         <li class="dropdown-item" data-value="5">value 5</li>
         <li class="dropdown-item" data-value="6">value 6</li>
      </ul>
   </div>
</div>
```

`main.js`

```js
function logData(data) {
   console.log(data);
}

const selectorId1 = "formId1";
const selectorForm1 = new lmSelect(document, selectorId1);
selectorForm1.init(logData);

const selectorId2 = "formId2";
const selectorForm2 = new lmSelect(document, selectorId2);
selectorForm2.init(logData);
```

`lmSelect.css`

```css
.dropdown {
   box-sizing: border-box;
   position: relative;
}

/* Button */
.dropdown-btn {
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 700;
   font-size: 10px;
   line-height: 150%;
   letter-spacing: 0.02em;
   text-transform: capitalize;
   color: rgba(76, 179, 73, 1);
}

.dropdown-btn {
   position: relative;
   display: block;

   box-sizing: inherit;
   padding: 4px calc(6px + 16px) 4px 6px;
   width: 90px;
   height: 24px;

   outline: none;
   border: none;

   text-align: left;

   cursor: pointer;

   border-radius: 2px;
   border: 1px solid transparent;
   background: rgba(76, 179, 73, 0.1);
}

.dropdown-btn:focus,
.dropdown-btn._focus {
   border: 1px solid rgba(76, 179, 73, 0.2);
}

.dropdown-btn::after {
   content: "";

   position: absolute;
   top: 50%;
   right: 7px;
   transform: translateY(-50%);

   width: 0;
   height: 0;

   border-radius: 1px;
   border-width: 6px 5px 0px 5px;
   border-color: rgba(76, 179, 73, 1) transparent transparent transparent;
   border-style: solid;

   pointer-events: none;
}

.dropdown-input {
   display: none;
}

/* List */
.dropdown-list {
   display: none;

   z-index: 1;
   overflow: hidden;
   position: absolute;

   box-sizing: inherit;
   padding: 0;
   margin: 0;
   width: 100%;

   top: 0;
   top: 24px;

   list-style-type: none;
}

.dropdown-list._visible {
   display: block;
}

/* Item */
.dropdown-item {
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 500;
   font-size: 10px;
   line-height: 150%;
   letter-spacing: 0.02em;
   text-transform: capitalize;
   color: rgba(255, 255, 255, 0.6);

}

.dropdown-item {
   box-sizing: inherit;
   padding: 5px 6px;
   margin: 0;

   border-bottom: 1px solid rgba(255, 255, 255, 0.05);
   background: rgba(36, 37, 38, 1);

   cursor: pointer;
}

.dropdown-item:hover {
   color: rgba(99, 165, 234, 1);
   background: rgba(40, 54, 68, 1);
}
```

---

#### AUTHOR

<p align="left">
	<a href="https://luamoris.com">
		<img style="border-radius: 4px;" width="50" src="https://avatars.githubusercontent.com/u/70754306?s=460&u=922c28870849f7c9528034f0512e69fb77339c84&v=4" alt="Iosif Luamoris"/>
	</a>
</p>