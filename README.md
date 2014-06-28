wizard.js
=========

Simply turn any ordinary form into a wizard with navigatable steps. <br/>
> No fancy features. No CSS. Highly Customizable.

##Get Started

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="wizard.js" type="text/javascript"></script>
...
<form>
<fieldset>
 <input type="text" name="123"></input>
</fieldset>
<fieldset>
  <input type="text" name="456"></input>
</fieldset>
<fieldset>
  <input type="text" name="789"></input>
</fieldset>
</form>
```
```js
$(' form ').wizard();
```

The given example will produce:
```html
<form>
<fieldset>
 <input type="text" name="123"></input>
 <a class="next">Next</a>
</fieldset>
<fieldset>
  <input type="text" name="456"></input>
  <a class="next">Next</a>
    <a class="back">Back</a>
</fieldset>
<fieldset>
  <input type="text" name="789"></input>
  <a class="back">Back</a>
</fieldset>
</form>
```

Thats all you need.
