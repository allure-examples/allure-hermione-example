import { expect } from "chai"

beforeEach(async ({ browser, currentTest }) => {
    await browser.url("https://www.startpage.com/");
	await browser.$("#q").setValue("hello world")
	await browser.$("#search-btn").click()
});

it("doesn't show any result item", async ({ browser, currentTest }) => {
	const items = await browser.$$(".w-gl__result")
    const screenshot = await browser.takeScreenshot()

    await browser.attach(currentTest.id(), screenshot, "image/png")

	expect(items.length).eq(0)
});
