import { expect } from "chai"

beforeEach(async ({ browser, currentTest }) => {
    await browser.url("https://www.startpage.com/");
	await browser.$("#q").setValue("hello world")
	await browser.$("#search-btn").click()
});

it("doesn't show any result item", async ({ browser, currentTest }) => {
	const items = await browser.$$(".w-gl__result")
    const screenshot = await browser.takeScreenshot()

	await browser.feature(currentTest.id(),"Integration with Hermione test framework")
	await browser.story(currentTest.id(),"Failing tests")
	await browser.label(currentTest.id(),"service", "Useless failing assert")

    await browser.attach(currentTest.id(), screenshot, "image/png")

	expect(items.length).eq(0)
});
