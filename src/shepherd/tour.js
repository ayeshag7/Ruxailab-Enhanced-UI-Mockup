// src/shepherd/tour.js
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import './styles.css'

const tour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    cancelIcon: { enabled: true },
    classes: 'shepherd-theme-arrows',
    modalOverlayOpeningPadding: 8,
    modalOverlayOpeningRadius: 4,
    waitForElement: true
  },
  useModalOverlay: true,
});


tour.addStep({
    id: 'step1',
    text: '<b> <span style="font-size: 32px;" id="icon";>🚀</span> Launch a New Test</b><br><span>Start a new usability or heuristic evaluation task.</span>',
    attachTo: {
      element: '#create-test',
      on: 'bottom'
    },
    classes: 'custom-shepherd-step',
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'step2',
    text: '<b><span style="font-size: 32px; id="icon";>🔍</span> Search Across Your Workspace</b><br><span>Instantly find tests by name, tags, or creator when managing multiple projects or collaborating with your team.</span>',
    attachTo: {
      element: '#search-bar',
      on: 'bottom'
    },
    classes: 'custom-shepherd-step',
    buttons: [
      {
        text: 'Back',
        action: tour.back
      },
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

export default tour;
