# Amazon Cognito User Pools Javascript Sample PG

JAWS-UG福岡「JAWS-UG福岡：３度目の濃い目にAWSの話をしてみよう」の発表で使用したデモPGです。
* https://jaws-ug-kyushu.doorkeeper.jp/events/42203


**2016/06/14現在のものです** ベータ版を元にしているため、動かなくなる可能性があります。ご容赦ください。

サンプルPG等々は下記情報をもとにしております。
* https://github.com/aws/amazon-cognito-identity-js


# 作業の流れ
1. Cognito user Poolsを作成する
1. Cognito Identity Poolsを作成する
1. javascriptでの実行環境をセットアップ
1. サンプルPGに値をセットする


# Cognito user Poolsを作成
##  Cognito User Poolsの作成
JavaScriptで実行時には作成した際の下記情報が必要となります。

##  Cognito User Poolsの作成
### 作成時の設定
* **Attribute ** ： email、phone number にチェック
* **Apps** : Generate client secretのチェックをオフにする。
* **verification** : email、phone number　にチェック

### 作成後値を確認
JavaScriptで実行時には作成した際の下記情報が必要となります。

* **region**:us-east-1(現在はus-east-1のみ)
* **UserPoolId**:UserPool作成後、メニューdetailsで確認（例：us-east-1_TcoKGbf7n）
* **ClientId**: UserPoolにAppsを登録、Apps**App client id**の値を確認(例：4pe2usejqcdmhi0a25jp4b5sh3)

# Cognito Identity Poolsを作成
### 作成時の設定
* ** Enable access to unauthenticated identities** のチェックをオン

### 作成後値を確認
IdentityPoolId: Identity Pool作成後に"Edit identity pool"の画面から確認

# javascriptでの実行環境をセットアップ

1.  Amazon Cognito AWS SDK for JavaScriptをダウンロードして、配置する
  * [aws-cognito-sdk.min.js](https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/aws-cognito-sdk.min.js)
  
2.  Amazon Cognito Identity SDK for JavaScriptをダウンロードして配置する
  * [amazon-cognito-identity.min.js](https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/amazon-cognito-identity.min.js)

3.  JavaScript BN library for BigInteger computations をダウンロードして配置する
  * [jsbn.js & jsbn2.js](http://www-cs-students.stanford.edu/~tjw/jsbn/)

4.  Stanford Javascript Crypto Library をダウンロードして配置する

  ** 下記URLのものを利用する**

  * [sjcl.js](https://github.com/aws/amazon-cognito-identity-js/files/233157/sjcl.js.zip)

5.  Moment.jsをダウンロードして配置する
  * [Moment.js](http://momentjs.com/)


<pre class="prettyprint">
    &lt;script src="https://sdk.amazonaws.com/js/aws-sdk-2.3.8.min.js"&gt;&lt;/script&gt;
    &lt;script src="js/jsbn.js"&gt;&lt;/script&gt;
    &lt;script src="js/jsbn2.js"&gt;&lt;/script&gt;
    &lt;script src="js/sjcl.js"&gt;&lt;/script&gt;
    &lt;script src="js/moment.min.js"&gt;&lt;/script&gt;
    &lt;script src="dist/aws-cognito-sdk.min.js"&gt;&lt;/script&gt;
    &lt;script src="dist/amazon-cognito-identity.min.js"&gt;&lt;/script&gt;    
</pre>

# javascriptでの実行環境をセットアップ
* js/cognitoid.js に値をセットする

```
  var region = 'us-east-1'; //Cognitoのリージョン
  var IdentityPoolId = 'us-east-1:xxxxxxx-xxxx-xxxx-xxxx-xxxxxxx'; //IdentityPoolIDをセット
  var UserPoolId = 'us-east-1_xxxxxxxx'; //UserPoolIDをセット
  var ClientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxx'; //UserPoolのClientIDをセット
```
