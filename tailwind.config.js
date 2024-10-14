/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
			"extend": {
			colors: {
				"tnbg": "#1a1b26",
				"tnfg": "#c0caf5",
				"tnbgalt": "#c0caf5",
				"tnbgalthigh": "#9aa5ce",
				"tnhighlight" : "#5a3e8e",
				"tnhighlight2" : "#9ece6a",
				"tnblue" : "#c0caf5"
			},
			boxShadow: {
        'w': '0 4px 0px 0px #9ece6a',
      },
      backgroundImage: {
        'cross-pattern': "url(../images/background.svg)"
      }
		},
  },
  plugins: [],
}

