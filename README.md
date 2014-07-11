# socialize

Use twitter as a key-value database.


## Install

```shell
$ npm install socialize
```


## Use

```javascript
var socialize = require('socialize');

var db = socialize({
  consumer_key: 'OH HI HOW ARE YOU',
  consumer_secret: 'OH HI HOW ARE YOU',
  access_token_key: 'OH HI HOW ARE YOU',
  access_token_secret: 'OH HI HOW ARE YOU'
});

db.put('hey', 'there', function (err) {
  db.get('hey', function (err, value) {
    console.log(value);
  });
});
```


## License
MIT
