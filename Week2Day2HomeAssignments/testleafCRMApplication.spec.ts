import {test} from '@playwright/test'
test('CRM Application Login', async({page}) => {

//Login
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('Demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()

//Navigate to Leads page
await page.getByText('CRM/SFA').click()
await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click()
await page.waitForTimeout(3000)
await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
await page.waitForTimeout(3000)

//Fill the Create Lead form
await page.locator('#createLeadForm_companyName').fill('Wells Fargo')
await page.locator('#createLeadForm_firstName').fill('Poorna')
await page.locator('#createLeadForm_lastName').fill('Muthuswamy')
await page.locator('#createLeadForm_personalTitle').fill('Ms.')
await page.locator('#createLeadForm_generalProfTitle').fill('Testing')
await page.locator('#createLeadForm_annualRevenue').fill('30000')
await page.locator('#createLeadForm_departmentName').fill('QA')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9677652208')

//Click on Submit and get the page title
await page.locator('.smallSubmit').click()

console.log("Page Title", await page.title())


await page.waitForTimeout(3000)

})