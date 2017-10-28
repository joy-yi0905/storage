# storage
客户端存储

高版本浏览器使用 localstrong ， 低版本使用 cookie。不过cookie的容量有限，约为4K。而对于localstrong，虽然可以存5M左右的数据，但是相对来说，读取比较耗性能。据验证，与单次读取的数据量无关，与读取的次数有关！所以设置的格式和对应的值非常重要。

##用法

- 首先引入storage.js：

```html
<script src="js/storage.js"></script>
```

- 设置数据

```javascript
storage.set(key1, val1);
```

当然你也可以传入对象，进行多个键值对设置：

```javascript
storage.set({
	key1: val1,
	key2: val2
});
```

- 读取数据

```javascript
storage.get('key1');
```

- 清空数据

```javascript
storage.remove('key1');
```
