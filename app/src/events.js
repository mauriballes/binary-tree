import swal from 'sweetalert';
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
  let valueInt = Math.trunc(inputVal);
  switch (method) {
    case '@insert':
      app.insert(valueInt);
      break;
    case '@find':
      let valueRes = app.find(valueInt);
      if (valueRes === null)
        swal("Elemento No Encontrado", "No se encontro la hoja!", "error");
      else
        swal("Elemento Encontrado", "Se encontro la hoja!", "success");
      break;
    case '@remove':
      app.remove(valueInt);
      break;
    default:
      break;
  }
});
