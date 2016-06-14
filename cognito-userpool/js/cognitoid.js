  var region = 'us-east-1'; //Cognitoのリージョン
  var IdentityPoolId = 'XXXXXXXXXXX'; //IdentityPoolIDをセット
  var UserPoolId = 'us-east-1_XXXXXXXXX'; //UserPoolIDをセット
  var ClientId = 'XXXXXXXXXXXXXXXXXXXXXXXXXX'; //UserPoolのClientIDをセット

  AWS.config.region = region; 
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
  });
  // Initialize the Amazon Cognito credentials provider
  AWSCognito.config.region = region; // Region
  AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
  });
  var data = { UserPoolId: UserPoolId,
                ClientId: ClientId
  };

  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(data);
  var attributeList = [];
  var cognitoUser;

  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(data);
  var attributeList = [];
  var cognitoUser;
