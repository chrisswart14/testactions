// Author: Mahan Fathi, https://github.com/Mahan-F/test-project-action

const axios = require('axios')
const core = require('@actions/core')

const API_URL = `https://api.testproject.io/v2/projects/${ strip(process.env.INPUT_PROJECT_ID) }/tests/${ strip(process.env.INPUT_TEST_ID) }/run`
const API_HEADER = {
  'Authorization': strip(process.env.INPUT_API_KEY)
}
// const CHECK_INTERVAL = parseInt(strip(process.env.INPUT_CHECK_INTERVAL)) * 1000

// Keep track of all jobs
// const jobsStatus = []


v2/projects/${ strip(process.env.INPUT_PROJECT_ID) }/jobs

async function main() {
  
  async function execute test(){
    const executeJob = axios({
        method: 'post',
        url: `${ API_URL }`,
        headers: API_HEADER,
        body: '{
           "agentId": "OsMIq6qj4kWRY5uWZooV8A",
           "browser": "Chrome",
           "testParameters": {
              "ApplicationURL": "https://dev-cw.temporall.com",
              "Email": "example@testproject.io"
            }
          }'
      }).catch( err => {
        core.setFailed(`Execution failed for test ${ test.id } (${ test.name })`)
        console.log(err)
        return
      })
}

main()
