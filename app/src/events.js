import {App} from './app';

const container = $('#mynetwork').get(0);
let app = new App(container);

// Modal Event
$('#inputModal').on('show.bs.modal', function(event) {
  let button = $(event.relatedTarget); // Button that triggered the modal
  let recipient = button.data('whatever'); // Extract info from data-* attributes
  // Get modal
  let modal = $(this);
  modal.find('.modal-body input#method').val(recipient);
});

// Button Event
$('#send-action').click(() => {
  // Get method
  let method = $('input#method').val();
  let inputVal = $('input#input-value').val();
  let value = Math.trunc(inputVal);
  switch (method) {
    case '@insert':
      app.insert(value);
      break;
    case '@find':
      app.find(value);
      break;
    case '@remove':
      app.remove(value);
      break;
    default:
      break;
  }
});
