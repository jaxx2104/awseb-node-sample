import fs from 'fs'

export default (entry) => {
  console.log(entry)
  fs.appendFileSync(
    '/tmp/sample-app.log',
    new Date().toISOString() + ' - ' + entry + '\n'
  )
}
