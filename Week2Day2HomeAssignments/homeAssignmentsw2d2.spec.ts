import {chromium, firefox, test} from '@playwright/test'
import { channel } from 'node:diagnostics_channel'

test('Red Bus and Flipkart in Edge and Firefox Browser Instances', async() => {

    const browser = await chromium.launch({channel:'msedge'})
    const context= await browser.newContext()
    const page= await context.newPage()

    await page.goto('https://www.redbus.in/')

    console.log("Page Title" + await page.title())
    console.log("Page URL" + page.url())

    await page.waitForTimeout(3000)

     const browser1 = await firefox.launch()
    const context1= await browser1.newContext()
    const page1= await context1.newPage()

    await page1.goto('https://www.flipkart.com/')

    console.log("Page Title" + await page1.title())
    console.log("Page URL" + page1.url())

    await page1.waitForTimeout(3000)

})