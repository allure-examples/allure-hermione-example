module.exports = {
    sets: {
        desktop: {
            // browsers: ["chrome", "safari"],
            browsers: ["chrome"],
            // browsers: ["safari"],
            files: 'tests/desktop'
        }
    },

    browsers: {
        chrome: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['--headless']
                }
            }
        },
        safari: {
            desiredCapabilities: {
                browserName: 'safari'
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                'moz:firefoxOptions': {
                    args: ['-headless']
                }
            }
        }
    },



	plugins: {
		"allure-hermione": {
			foo: "bar",
			bar: "baz"
		}
	}
};
