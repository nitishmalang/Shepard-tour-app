// src/ShepherdTour.js
import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';

const ShepherdTour = () => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });

    tour.addStep({
      id: 'welcome',
      text: 'Welcome to the Shepherd tour!',
      attachTo: {
        element: '#welcome-title',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'feature',
      text: 'This is an important feature.',
      attachTo: {
        element: '#feature-element',
        on: 'top'
      },
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

    tour.addStep({
      id: 'next-feature',
      text: 'Check out the next feature!',
      attachTo: {
        element: '#next-feature-element',
        on: 'top'
      },
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

    tour.addStep({
      id: 'conclusion',
      text: 'This concludes our tour.',
      attachTo: {
        element: '#conclusion-element',
        on: 'top'
      },
      buttons: [
        {
          text: 'Finish',
          action: tour.complete
        }
      ]
    });

    document.getElementById('start-tour').addEventListener('click', () => {
      tour.start();
    });

  }, []);

  return null;
};

export default ShepherdTour;
