import Reveal from 'reveal.js/dist/reveal.esm'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import './atom-one-dark.css'

Reveal.initialize({
  plugins: [Markdown, Highlight],
  history: true,
})


// Images
import doItLive from './img/do-it-live.gif'

document.querySelector('img#do-it-live').setAttribute('src', doItLive)
