import {GoogleWBP} from './googleWBP';
const fs = require('fs')
const google = new GoogleWBP()

test('do a search', async () => {
    await google.navigate()
    await google.search('Damnation')
    let text = await google.getResults()
    expect(text).toContain('Damnation')
    await fs.writeFile(`${__dirname}/damnation.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await fs.writeFile(`${__dirname}/damnationScreenshot.png`, await google.driver.takeScreenshot(), "base64", (e) => {
        if (e) console.error(e)
        else console.log("Save Successful")
    })
})
afterAll(async () => {
    await google.driver.quit()
})