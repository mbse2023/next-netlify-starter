import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
    On Monday, over 58,000 houses in New Zealand's upper North Island were without power as Cyclone Gabrielle approached, bringing severe gusts, heavy rain, and massive surf to Auckland and surrounding areas.

Gabrielle passed through the Australian territory of Norfolk Island in the Tasman Sea on Saturday night, while its most devastating gusts spared the island.


It is presently located just north of New Zealand, with weather forecasts forecasting rain and strong gusts as it approaches land on Monday and Tuesday.

"The effect of Gabrielle is still in its early stages, and extra significant and severe weather is still predicted for Tamaki Makaurau (Auckland) later today into Tuesday morning," said Rachel Kelleher, Deputy Controller Auckland Emergency Management, on Monday.

"Now is not the time for complacency," she continued.  
Many schools and local government buildings in Auckland and the upper North Island have closed, and residents are being advised not to go if at all possible. Emergency declarations have been issued in Auckland and at least four other areas.



ADVERTISEMENT


Ad Reaction
Metservice reported that Whangarei, a city north of Auckland, has received 100.5 mm of rain (4 inches) in the previous 12 hours, with winds of 159 km/h (100 miles per hour) recorded off the coast of Auckland.
          Get started by editing <code>pages/index.js</code>
        </p>
       <p><a href="https://mybestsleepever.com">mybestsleepever.com</a></p>
      </main>

      <Footer />
    </div>
  )
}
