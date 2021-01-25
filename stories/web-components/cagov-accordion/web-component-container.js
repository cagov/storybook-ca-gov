import { html } from 'lit-html';
import './cagov-accordion.css';
import '@cagov/accordion';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({ data }) => {
  return html`
    <cagov-accordion>
      <div class="card">
        <button class="card-header accordion-alpha" type="button" aria-expanded="false">
          <div class="accordion-title">
    <h4>What are the similarities and differences between Influenza (flu) and COVID-19?</h4>
          </div><div class="plus-munus"></div>
        </button>
        <div class="card-container" aria-hidden="true" style="height: 0px;">
          <div class="card-body">
    <p>Influenza (flu) and COVID-19 are both contagious respiratory illnesses, but they’re caused by different viruses. COVID-19 is caused by a <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Basics">new coronavirus (called SARS-CoV-2)</a> and flu is caused by <a href="https://www.cdc.gov/flu/about/viruses/index.htm">influenza viruses</a>.&nbsp;</p>
<p>The symptoms of flu and COVID-19 are similar. It is hard to tell the difference between them without testing.</p>
<p>Cases of COVID-19 and flu can have anything from no symptoms (asymptomatic) to severe symptoms. Common symptoms that COVID-19 and flu share include:</p>
<ul><li>Fever or chills</li><li>Cough</li><li>Shortness of breath or difficulty breathing</li><li>Fatigue (tiredness)</li><li>Sore throat</li><li>Runny or stuffy nose</li><li>Muscle pain or body aches</li><li>Headache</li><li>Vomiting and diarrhea (more common in children than adults)</li></ul>
<p>The major difference between them is COVID-19 may include change in or loss of taste or smell.</p>
<p>The CDC has more information about <a href="https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm">similarities and differences between the flu and COVID-19.</a></p>

          </div>
        </div>
      </div>
    </cagov-accordion>
  `;
};
