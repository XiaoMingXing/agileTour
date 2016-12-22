# 基于javascript的敏捷测试

##  Run 前端Module
* <code>cd cost-web-ui</code>
* <code>npm intall</code>
* <code>bower install</code>
* <code>grunt server</code>
* 访问localhost:9000即可

## Run 后端Module
* <code>cd cost-nodejs-services</code>
* <code>npm install</code>
* <code>node app.js</code>

## Run UT
* <code>Frontend: <code>
* <code>Backend:<code>

## Run API Test
* <code>  <code>

## Run PACT
### cost-web-ui
Start mock service 
* <code>bash --login <code>(If you ruby version is below 2.3.0)
* <code>bundle exec pact-mock-service -p 9001 --pact-specification-version 2.0.0 -l log/pact.logs --pact-dir tmp/pacts <code>

Open another terminal, run test
* <code>grunt pact <code>

### cost-nodejs-service
stop mock
run services
* <code>./node_modules/.bin/babel-node pact-test/pacts.js <code>

restart services
/cost-nodejs-services/scripts/controllers/auth

## Run E2E
* <code>cd cost-web-test<code>
* <code>./node_modules/grunt-protractor-runner/scripts/webdriver-manager-update <code>
* <code>grunt e2e-local<code>

change path of img 

node cucumber-test/features/tools/diff.js






