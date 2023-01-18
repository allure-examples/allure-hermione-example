import { expect } from "chai"

beforeEach(async ({ browser, currentTest }) => {
    await browser.url("https://www.startpage.com/");
	await browser.$("#q").setValue("hello world")
	await browser.$("#search-btn").click()
});

it("redirects on the results page", async ({ browser, currentTest, ...rest }) => {
    await browser.epic(currentTest.id(), "my_epic")

	expect(browser.url).not.eq("https://www.startpage.com/")
});

it("shows some results items", async ({ browser, currentTest }) => {
	const items = await browser.$$(".w-gl__result")
    const screenshot = await browser.takeScreenshot()

    await browser.attach(currentTest.id(), screenshot, "image/png")

	expect(items.length).not.eq(0)
});
