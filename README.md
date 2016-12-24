# 基于javascript的敏捷测试

##  Add node_modules and bower_modules in cost-web-ui project
* <code>cd cost-web-ui</code>
* <code>npm intall</code>
* <code>bower install</code>

##  Add node_modules in cost-nodejs-services project
* <code>cd cost-nodejs-services</code>
* <code>npm install</code>
* <code>node app.js</code>

##  Add node_modules in cost-web-test project
* <code>cd cost-web-test</code>
* <code>npm install</code>

## Run UT
### Frontend
* <code>cd cost-web-ui</code>
* 在前端Module中运行Jasmine版的单元测试: <code>grunt ut</code>

### Backend
* <code>cd cost-nodejs-services</code>
* a. 在后端Module中运行Jasmine版的单元测试: <code>jasmine-node ut-test/jasmine  --verbose</code>
  (note:使用<code>npm install -g jasmine-node</code>安装Package)
* b. 在后端Module中运行Mocha版的单元测试: <code>mocha ut-test/mocha/services</code>
  (note:使用<code>npm install -g mocha</code>安装Package)


## Run API Test
* <code>cd cost-web-test</code>
* a. 在后端Module中运行FrisbyJs版的API测试: <code>jasmine-node api-test/frisby --verbose</code>
  (note:使用<code>npm install -g jasmine-node</code>安装Package)
* b. 在后端Module中运行Supertest版的API测试: <code>mocha api-test/supertest</code>
  (note:使用<code>npm install -g mocha</code>安装Package)
 
  
## Run PACT Test
### cost-web-ui
####Start mock service 
* <code>bash --login </code>(If you ruby version is below 2.3.0)
* <code>bundle exec pact-mock-service -p 9001 --pact-specification-version 2.0.0 -l log/pact.logs --pact-dir tmp/pacts </code>

####Open another terminal, run test
* <code>grunt pact </code>

### cost-nodejs-service
* stop mock
* run services
* <code> ./node_modules/.bin/babel-node pact-test/pacts.js </code>

* restart services
* /cost-nodejs-services/scripts/controllers/auth

## Run E2E
* <code>cd cost-web-test</code>
* <code>./node_modules/grunt-protractor-runner/scripts/webdriver-manager-update </code>
* <code>grunt e2e-local</code>

* change path of img 
* node cucumber-test/features/tools/diff.js