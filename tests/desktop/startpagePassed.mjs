import { expect } from "chai"

beforeEach(async ({ browser, currentTest }) => {
    await browser.url("https://www.startpage.com/");
	await browser.$("#q").setValue("hello world")
	await browser.$("#search-btn").click()
});

it("redirects on the results page", async ({ browser, currentTest, ...rest }) => {
    await browser.epic(currentTest.id(), "my_epic")

	expect(browser.url).not.eq("https://www.startpage.com/")

	await browser.feature(currentTest.id(),"Integration with Hermione test framework")
	await browser.story(currentTest.id(),"Positive tests")
	await browser.label(currentTest.id(),"service", "Search engine idle")

});

it("shows some results items", async ({ browser, currentTest }) => {
	
	const items = await browser.$$(".w-gl__result")
    const screenshot = await browser.takeScreenshot()
	
	await browser.feature(currentTest.id(),"Integration with Hermione test framework")
	await browser.story(currentTest.id(),"Positive tests")
	await browser.label(currentTest.id(),"service", "Search engine")
    
	await browser.attach(currentTest.id(), screenshot, "image/png")

	expect(items.length).not.eq(0)
});
