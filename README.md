# socialize

Use twitter as a key-value database.


## Install

```shell
$ npm install socialize
```


## Use

var socialize = require('socialize');

```javascript
var db = socialize({
  consumer_key: 'OH HI HOW ARE YOU',
  consumer_secret: 'OH HI HOW ARE YOU',
  access_token_key: 'OH HI HOW ARE YOU',
  access_token_secret: 'OH HI HOW ARE YOU'
});

db.put('hey', 'there', function (err, value) {
  db.get('hey', function (err, value) {
    console.log(value);
  });
});
```


## License
MIT
