# TinyURL

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## 使用说明
1. install node.js and angualr ，the version of angualr is 5.2.0
2. npm install 
3. ng serve --open
4. open http://localhost:4200/

## 设计思路
1. 需求
   * 给定一个原始URL，该app能生成一个较短且唯一的短网址。
   * 用户访问短网址时，该app会将重定向到原始链接。
2. 算法思路
    核心问题：生成全局唯一的id

   * 给原始URL编码
    借鉴一下Java的hash算法，计算给定的url的哈希值，然后给这个哈希值进行base62（[0-9,a-z,A-Z]）的编码,生成6个字符串，长度应该是够的，这样生成的id确保是全局唯一。
      * 当然这其中存在一个问题：
    当多个用户输入相同的URL时，将得到相同的tinyURL，这个应该是不合理的
      * 解决办法：可以将用户id绑定到originURL上面，保证唯一性。

3. 注意：
    本app没有使用数据库，没有和后端进行交互，只是单纯的实现了originURL的编码和解码，所以页面一旦刷新，数据就为空
